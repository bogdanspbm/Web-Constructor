package adapters

import (
	"backend/src/utils/ssh"
	"database/sql"
	"fmt"
	"github.com/jmoiron/sqlx"
)

var sshTunnel ssh.SSH

type DBConnect struct {
	Ip       string `json:"ip"`
	Port     string `json:"port"`
	User     string `json:"user"`
	Password string `json:"password"`
	Database string `json:"database"`

	db *sqlx.DB
}

func InitConnection(tunnel ssh.SSH) {
	sshTunnel = tunnel
}

func (client *DBConnect) Open() error {

	driver := "postgres"

	if sshTunnel.Client != nil {
		driver = "postgres+ssh"
		sql.Register(driver, &ssh.ViaSSHDialer{sshTunnel.Client})
	}

	db, err := sqlx.Open(driver, fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable", client.User, client.Password, client.Ip, client.Port, client.Database))
	if err != nil {
		return err
	}

	err = db.Ping()

	if err != nil {
		return err
	}

	client.db = db
	return nil
}

func (client *DBConnect) Close() {
	client.db.Close()
}

func (client *DBConnect) GetTables(schema string) ([]string, error) {
	var res []string
	rows, err := client.db.Query("SELECT table_name FROM information_schema.tables WHERE table_schema = $1;", schema)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var el string
		err = rows.Scan(&el)

		if err != nil {
			fmt.Println(err)
		}

		res = append(res, el)
	}

	return res, nil
}
func (client *DBConnect) GetSchemas() ([]string, error) {
	var res []string
	rows, err := client.db.Query("SELECT schema_name FROM information_schema.schemata;")

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var el string
		err = rows.Scan(&el)

		if err != nil {
			fmt.Println(err)
		}

		res = append(res, el)
	}

	return res, nil
}
