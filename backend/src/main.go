package main

import "./server"

func main() {
	server := server.New()
	server.Start(8080)
}
