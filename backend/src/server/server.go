package server

import (
	"../requests"
	"fmt"
	"net/http"
)

type Server struct {
}

func New() *Server {
	server := &Server{}
	return server
}

func (server *Server) prepare() {
	exportServer := requests.NewExportServer()
	exportHandler := http.HandlerFunc(exportServer.ExportHandler)
	http.Handle("/export", exportHandler)
}

func (server *Server) Start(port int) {
	http.ListenAndServe(fmt.Sprintf(":%v", port), nil)
}
