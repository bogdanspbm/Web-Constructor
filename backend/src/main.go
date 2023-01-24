package main

import (
	"backend/src/utils"
	"net/http"
)

func main() {
	handler := http.HandlerFunc(utils.TableList)
	http.Handle("/tables", handler)

	pingHandler := http.HandlerFunc(utils.Ping)
	http.Handle("/", pingHandler)

	http.ListenAndServe(":8080", nil)
}

func mainDatabaseRequest() {
	database := &utils.DBConnect{Ip: "localhost", Port: "49153", User: "postgres", Password: "postgrespw", Database: "postgres"}
	err := database.Open()

	if err != nil {
		panic(err)
	}

	schemas, err := database.GetSchemas()

	if err != nil {
		panic(err)
	}

	for _, schema := range schemas {
		println(schema)
		tables, err := database.GetTables(schema)

		if err != nil {
			panic(err)
		}

		for _, table := range tables {
			println("   " + table)
		}
	}

	defer database.Close()
}
