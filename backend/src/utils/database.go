package utils

import (
	"database/sql"
	"fmt"
	"github.com/jmoiron/sqlx"
)

var sshTunnel SSH

type Schemas struct {
	Schema string `db:"schema_name"`
}

type DBConnect struct {
	Ip       string
	User     string
	Password string
	Name     string

	db *sqlx.DB
}

func InitConnection(tunnel SSH) {
	sshTunnel = tunnel
}

func (client *DBConnect) Open() error {

	driver := "postgres"

	if sshTunnel.client != nil {
		driver = "postgres+ssh"
		sql.Register(driver, &ViaSSHDialer{sshTunnel.client})
	}

	db, err := sqlx.Open(driver, fmt.Sprintf("postgres://%s:%s@%s/%s?sslmode=disable", client.User, client.Password, client.Ip, client.Name))
	if err != nil {
		return err
	}

	client.db = db
	return nil
}

func (client *DBConnect) Close() {
	client.db.Close()
}

func (client *DBConnect) GetSchemas() ([]Schemas, error) {
	var res []Schemas
	rows, err := client.db.Query("select schema_name from information_schema.schemata;")

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var schema string
		err = rows.Scan(&schema)

		if err != nil {
			fmt.Println(err)
		}

		el := Schemas{Schema: schema}

		res = append(res, el)
	}

	return res, nil
}
