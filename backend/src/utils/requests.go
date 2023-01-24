package utils

import (
	"encoding/json"
	"errors"
	"net/http"
)

type StatusResponse struct {
	Status string `json:"status"`
}

func makeResponse(w http.ResponseWriter, status string) error {
	response := StatusResponse{Status: status}

	jsonBody, err := json.Marshal(response)

	if err != nil {
		http.Error(w, "{'status':'failure'}", http.StatusBadRequest)
		return errors.New("Can't parse JSON")
	}

	w.Write(jsonBody)

	return nil
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
		makeResponse(w, "failure")
		return
	}

	err = connect.Open()

	if err != nil {
		makeResponse(w, "connection refused")
		return
	}

	defer connect.Close()

	makeResponse(w, "success")
}
