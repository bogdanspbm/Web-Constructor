package requests

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

type ExportServer struct {
}

func NewExportServer() *ExportServer {
	return &ExportServer{}
}

func (server *ExportServer) ExportHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		return
	}

	fmt.Println(string(body))
}
