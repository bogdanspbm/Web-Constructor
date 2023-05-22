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

	pageData := generator.NewNavigationGenerator(exportData)

	for _, v := range exportData.Widgets {
		fileDir := utils.ToCamelCase(v.Name)
		fileName := fmt.Sprintf("%v.html", utils.ToPascalCase(v.Name))
		jsFileName := fmt.Sprintf("%v.js", utils.ToPascalCase(v.Name))

		cardGenerator := generator.NewCardGenerator(v)
		utils.StringToFile(fmt.Sprintf("output/pages/%v/Card%v", fileDir, fileName), cardGenerator.GenerateCardHTML(pageData))

		listGenerator := generator.NewListGenerator(v)
		utils.StringToFile(fmt.Sprintf("output/pages/%v/List%v", fileDir, fileName), listGenerator.GenerateListHTML(pageData))

		jsData, err := listGenerator.GenerateListJS(pageData)

		if err != nil {
			continue
		}

		utils.StringToFile(fmt.Sprintf("output/pages/%v/List%v", fileDir, jsFileName), jsData)
	}

	for _, v := range exportData.Collections {
		fileDir := utils.ToCamelCase(v.Name)
		fileName := fmt.Sprintf("%v.js", utils.ToPascalCase(v.Name))
		collectionGenerator := generator.NewCollectionGenerator(v)
		collectionAdapterGenerator := generator.NewAdapterGenerator(v)

		builder := strings.Builder{}
		builder.WriteString(collectionGenerator.GenerateCollection())
		builder.WriteString(collectionAdapterGenerator.GenerateAdapter())

		utils.StringToFile(fmt.Sprintf("output/adapters/%v/%v", fileDir, fileName), builder.String())
	}

	http.Error(w, "{\"status\":\"Success\"}", http.StatusOK)
}
