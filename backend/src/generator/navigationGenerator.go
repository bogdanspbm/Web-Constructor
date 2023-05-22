package generator

import (
	"../objects"
	"strings"
)

type NavigationGenerator struct {
	Collections map[string]objects.Collection `json:"collections" db:"collections"`
	Widgets     map[string]objects.Widget     `json:"widgets" db:"widgets"`
	Vectors     map[string]objects.Vector     `json:"vectors" db:"vectors"`
	Groups      map[string]objects.Group      `json:"groups" db:"groups"`
}

func NewNavigationGenerator(collections map[string]objects.Collection, widgets map[string]objects.Widget, vectors map[string]objects.Vector, groups map[string]objects.Group) *NavigationGenerator {
	return &NavigationGenerator{collections, widgets, vectors, groups}
}

func (generator *NavigationGenerator) GenerateNavigation() string {
	builder := strings.Builder{}

	builder.WriteString("<div class=\"navigation\">\n")

	for _, v := range generator.Groups {
		builder.WriteString(v.GenerateGroup(generator.Widgets))
	}

	for _, v := range generator.Widgets {
		if v.HasGroup() {
			continue
		}
		builder.WriteString(v.GenerateNavigationButton())
	}
	builder.WriteString("</div>\n")

	return builder.String()
}
