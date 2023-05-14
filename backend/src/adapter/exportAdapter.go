package adapter

import "../objects"

type ExportData struct {
	Collections map[string]objects.Collection `json:"collections" db:"collections"`
	Widgets     map[string]objects.Widget     `json:"widgets" db:"widgets"`
}
