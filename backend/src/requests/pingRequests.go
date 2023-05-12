package requests

import "net/http"

type PingServer struct {
}

func NewPingServer() *PingServer {
	return &PingServer{}
}

func (server *PingServer) PingHandler(w http.ResponseWriter, r *http.Request) {
	http.Error(w, "{\"status\":\"Success\"}", http.StatusOK)
}
