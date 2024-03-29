package server

import (
	"backend/src/requests"
	"fmt"
	"net/http"
)

type Server struct {
}

func New() *Server {
	server := &Server{}
	server.prepare()
	return server
}

func (server *Server) prepare() {
	exportServer := requests.NewExportServer()
	exportHandler := http.HandlerFunc(exportServer.ExportHandler)
	http.Handle("/export", exportHandler)

	pingServer := requests.NewPingServer()
	pingHandler := http.HandlerFunc(pingServer.PingHandler)
	http.Handle("/", pingHandler)
}

func (server *Server) Start(port int) {
	http.ListenAndServe(fmt.Sprintf(":%v", port), nil)
}
