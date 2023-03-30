package main

import (
	"backend/src/utils/adapters"
	"backend/src/utils/requests"
	"net/http"
)

func main() {
	schemasHandler := http.HandlerFunc(requests.SchemasList)
	http.Handle("/schemas", schemasHandler)

	tablesHandler := http.HandlerFunc(requests.TablesList)
	http.Handle("/tables/", tablesHandler)

	pingHandler := http.HandlerFunc(requests.Ping)
	http.Handle("/", pingHandler)

	http.ListenAndServe(":8080", nil)
}

func mainDatabaseRequest() {
	database := &adapters.DBConnect{Ip: "localhost", Port: "49153", User: "postgres", Password: "postgrespw", Database: "postgres"}
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
