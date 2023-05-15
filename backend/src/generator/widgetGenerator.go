package generator

import (
	"../objects"
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
	builder.WriteString("<div class=\"grid\">\n")

	for _, v := range generator.Widget.Components {
		builder.WriteString(v.GenerateComponentHTML())
	}

	builder.WriteString("</div>\n")
	return builder.String()
}
