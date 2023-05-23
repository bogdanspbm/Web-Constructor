package requests

import (
	"../adapter"
	"../generator"
	"../utils"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

type ExportServer struct {
}

func NewExportServer() *ExportServer {
	return &ExportServer{}
}

func (server *ExportServer) ExportHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS")

	body, err := ioutil.ReadAll(r.Body)
	bodyString := string(body)

	var exportData adapter.ExportData
	err = json.NewDecoder(bytes.NewReader([]byte(bodyString))).Decode(&exportData)

	if err != nil {
		fmt.Println("Error:", err)
		http.Error(w, "{\"status\":\"Failed\"}", http.StatusBadRequest)
		return
	}

	outputFolder, err := utils.GenerateUID(24)
	defer utils.RemoveDirectory(fmt.Sprintf("output/%v", outputFolder))

	if err != nil {
		http.Error(w, "{\"status\":\"Failed\"}", http.StatusInternalServerError)
		return
	}

	pageData := generator.NewNavigationGenerator(exportData)

	libraryBuilder := strings.Builder{}

	for _, v := range exportData.Scripts {
		libraryBuilder.WriteString(fmt.Sprintf("import * as library from \"./../../library/%v.js\"\n", utils.ToPascalCase(v.Name)))
		fileName := fmt.Sprintf("output/%v/library/%v.js", outputFolder, utils.ToPascalCase(v.Name))
		utils.StringToFile(fileName, v.Body)
	}

	for _, v := range exportData.Widgets {
		fileDir := utils.ToCamelCase(v.Name)
		fileName := fmt.Sprintf("%v.html", utils.ToPascalCase(v.Name))
		jsFileName := fmt.Sprintf("%v.js", utils.ToPascalCase(v.Name))

		cardGenerator := generator.NewCardGenerator(v)
		err := utils.StringToFile(fmt.Sprintf("output/%v/pages/%v/Card%v", outputFolder, fileDir, fileName), cardGenerator.GenerateCardHTML(pageData))

		if err != nil {
			continue
		}

		listGenerator := generator.NewListGenerator(v)
		err = utils.StringToFile(fmt.Sprintf("output/%v/pages/%v/List%v", outputFolder, fileDir, fileName), listGenerator.GenerateListHTML(pageData))

		if err != nil {
			continue
		}

		jsData, err := listGenerator.GenerateListJS(pageData)

		if err != nil {
			continue
		}

		err = utils.StringToFile(fmt.Sprintf("output/%v/pages/%v/List%v", outputFolder, fileDir, jsFileName), jsData)
	}

	for _, v := range exportData.Collections {
		fileDir := utils.ToCamelCase(v.Name)
		fileName := fmt.Sprintf("%v.js", utils.ToPascalCase(v.Name))
		collectionGenerator := generator.NewCollectionGenerator(v)
		collectionAdapterGenerator := generator.NewAdapterGenerator(v)

		builder := strings.Builder{}
		builder.WriteString(libraryBuilder.String())
		builder.WriteString(collectionGenerator.GenerateCollection())

		if v.Script.Name == "" {
			builder.WriteString(collectionAdapterGenerator.GenerateAdapter())
		} else {
			builder.WriteString(v.Script.Body)
		}

		err := utils.StringToFile(fmt.Sprintf("output/%v/adapters/%v/%v", outputFolder, fileDir, fileName), builder.String())

		if err != nil {
			http.Error(w, "{\"status\":\"Failed\"}", http.StatusInternalServerError)
			return
		}
	}

	err = utils.CreateZipFile(fmt.Sprintf("output/%v.zip", outputFolder), fmt.Sprintf("output/%v", outputFolder))
	defer utils.RemoveDirectory(fmt.Sprintf("output/%v.zip", outputFolder))

	if err != nil {
		http.Error(w, "{\"status\":\"Failed\"}", http.StatusInternalServerError)
		return
	}

	file, err := os.Open(fmt.Sprintf("output/%v.zip", outputFolder))

	if err != nil {
		http.Error(w, "Failed to open file", http.StatusInternalServerError)
		return
	}

	defer file.Close()

	//stat, _ := file.Stat()

	// Set the appropriate headers for the HTTP response
	w.Header().Set("Content-Disposition", fmt.Sprintf("attachment; filename=\"%v.zip\"", exportData.ProjectInfo.Name))
	w.Header().Set("Content-Type", "application/octet-stream")
	//w.Header().Set("Content-Length", fmt.Sprintf("%v", stat.Size()))

	// Copy the file to the HTTP response
	_, err = io.Copy(w, file)
	if err != nil {
		http.Error(w, "Failed to write file to response", http.StatusInternalServerError)
		return
	}
}
