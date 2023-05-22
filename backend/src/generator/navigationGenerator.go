package generator

import (
	"../adapter"
	"strings"
)

type PageGenerator struct {
	Data adapter.ExportData
}

func NewNavigationGenerator(data adapter.ExportData) *PageGenerator {
	return &PageGenerator{data}
}

func (generator *PageGenerator) GenerateNavigation() string {
	builder := strings.Builder{}

	builder.WriteString("<div class=\"navigation\">\n")

	for _, v := range generator.Data.Groups {
		builder.WriteString(v.GenerateGroup(generator.Data.Widgets, generator.Data.Vectors))
	}

	for _, v := range generator.Data.Widgets {
		if v.HasGroup() {
			continue
		}
		builder.WriteString(v.GenerateNavigationButton())
	}
	builder.WriteString("</div>\n")

	return builder.String()
}
