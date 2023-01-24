package utils

import (
	"encoding/json"
	"net/http"
)

func Ping(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	http.Error(w, "{'status':'success'}", http.StatusOK)
}

func TableList(w http.ResponseWriter, r *http.Request) {
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

	http.Error(w, "{'status':'success'}", http.StatusOK)
}
