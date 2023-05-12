package main

import (
	"./server"
	"fmt"
)

func main() {
	server := server.New()

	fmt.Println("<---- Server Started: 8080 ---->")

	server.Start(8080)
}
