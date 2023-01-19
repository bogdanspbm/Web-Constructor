package main

import (
	"backend/src/utils"
	"fmt"
)

func main() {
	database := &utils.DBConnect{Ip: "localhost:49153", User: "postgres", Password: "postgrespw", Name: "postgres"}
	err := database.Open()

	if err != nil {
		panic(err)
	}

	schemas, err := database.GetSchemas()

	if err != nil {
		panic(err)
	}

	for _, schema := range schemas {
		fmt.Println(schema.Schema)
	}

	defer database.Close()
}
