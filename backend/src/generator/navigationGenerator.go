package generator

import (
	"../objects"
	"strings"
)

type NavigationGenerator struct {
	Collections map[string]objects.Collection `json:"collections" db:"collections"`
	Widgets     map[string]objects.Widget     `json:"widgets" db:"widgets"`
}

func NewNavigationGenerator(collections map[string]objects.Collection, widgets map[string]objects.Widget) *NavigationGenerator {
	return &NavigationGenerator{collections, widgets}
}

func (generator *NavigationGenerator) GenerateNavigation() string {
	builder := strings.Builder{}

	builder.WriteString("<div class=\"navigation\">\n")
	for _, v := range generator.Widgets {
		builder.WriteString(v.GenerateNavigationButton())
	}
	builder.WriteString("</div>\n")

	return builder.String()
}
