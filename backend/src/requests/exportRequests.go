package requests

import (
	"../adapter"
	"../generator"
	"../utils"
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

type ExportServer struct {
}

func NewExportServer() *ExportServer {
	return &ExportServer{}
}

func (server *ExportServer) ExportHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	bodyString := string(body)

	var exportData adapter.ExportData
	err = json.NewDecoder(bytes.NewReader([]byte(bodyString))).Decode(&exportData)

	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	navGenerator := generator.NewNavigationGenerator(exportData.Collections, exportData.Widgets, exportData.Vectors, exportData.Groups)

	for _, v := range exportData.Widgets {
		fileName := fmt.Sprintf("output/%v.html", utils.ToPascalCase(v.Name))
		cardGenerator := generator.NewCardGenerator(v)
		utils.StringToFile(fileName, cardGenerator.GenerateCardHTML(navGenerator))
	}

	for _, v := range exportData.Collections {
		fileName := fmt.Sprintf("output/%v.js", utils.ToPascalCase(v.Name))
		collectionGenerator := generator.NewCollectionGenerator(v)
		collectionAdapterGenerator := generator.NewAdapterGenerator(v)

		builder := strings.Builder{}
		builder.WriteString(collectionGenerator.GenerateCollection())
		builder.WriteString(collectionAdapterGenerator.GenerateAdapter())

		utils.StringToFile(fileName, builder.String())
	}

	http.Error(w, "{\"status\":\"Success\"}", http.StatusOK)
}
