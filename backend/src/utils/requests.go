package utils

import (
	"encoding/json"
	"net/http"
)

type StatusResponse struct {
	Status string `json:"status"`
}

func Ping(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	http.Error(w, "{'status':'success'}", http.StatusOK)
}

func TableList(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	var connect DBConnect

	decoder := json.NewDecoder(r.Body)
	decoder.DisallowUnknownFields()

	err := decoder.Decode(&connect)

	if err != nil {
		http.Error(w, "{'status':'failure'}", http.StatusBadRequest)
		return
	}

	err = connect.Open()

	if err != nil {
		http.Error(w, "{'status':'connection refused'}", http.StatusBadRequest)
		return
	}

	defer connect.Close()

	response := StatusResponse{Status: "success"}

	jsonBody, err := json.Marshal(response)

	if err != nil {
		http.Error(w, "{'status':'failure'}", http.StatusBadRequest)
		return
	}

	w.Write(jsonBody)
}
