package adapter

import "backend/src/objects"

type ExportData struct {
	Collections map[string]objects.Collection `json:"collections" db:"collections"`
	Widgets     map[string]objects.Widget     `json:"widgets" db:"widgets"`
	Vectors     map[string]objects.Vector     `json:"vectors" db:"vectors"`
	Groups      map[string]objects.Group      `json:"groups" db:"groups"`
	Scripts     map[string]objects.Script     `json:"scripts" db:"scripts"`
	ProjectInfo objects.ProjectInfo           `json:"projectInfo" db:"projectInfo"`
}
