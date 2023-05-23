package generator

import (
	"../objects"
	"fmt"
	"strings"
)

type WidgetGenerator struct {
	Widget objects.Widget
}

func NewWidgetGenerator(widget objects.Widget) *WidgetGenerator {
	return &WidgetGenerator{widget}
}

func (generator *WidgetGenerator) GenerateGrid() string {
	builder := strings.Builder{}
	builder.WriteString(fmt.Sprintf("<div class=\"grid\" style=\"grid-template-columns: repeat(%v, 1fr);  grid-template-rows: repeat(%v, 42px);\" >\n", generator.Widget.GetSize().X, generator.Widget.GetSize().Y))

	for _, v := range generator.Widget.Components {
		builder.WriteString(v.GenerateComponentHTML())
	}

	builder.WriteString("</div>\n")
	return builder.String()
}

func (generator *WidgetGenerator) GenerateList(collections map[string]objects.Collection) string {
	builder := strings.Builder{}
	builder.WriteString("<div class=\"table-header\">")
	for _, v := range generator.Widget.GetCollection(collections).Attributes {
		builder.WriteString(fmt.Sprintf("<div class=\"table-header-column\">%v</div>", v.Name))
	}
	builder.WriteString("</div>")
	builder.WriteString("<div class=\"table-scroll\" id=\"table-container\"></div>")
	return builder.String()
}
