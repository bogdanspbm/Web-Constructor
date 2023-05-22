package generator

import (
	"../objects"
	"../utils"
	"errors"
	"fmt"
	"strings"
)

type ListGenerator struct {
	Widget objects.Widget
}

func importAdapter(name string) (output string) {
	output = fmt.Sprintf("import * as %v from \"./../../adapters/%v/%v.js\";\n", utils.ToCamelCase(name), utils.ToCamelCase(name), utils.ToPascalCase(name))
	return output
}

func NewListGenerator(widget objects.Widget) *ListGenerator {
	return &ListGenerator{widget}
}

func (generator *ListGenerator) GenerateListHTML(data *PageGenerator) (output string) {

	widgetGenerator := NewWidgetGenerator(generator.Widget)

	builder := strings.Builder{}
	builder.WriteString("<!DOCTYPE html>\n")
	builder.WriteString("<html lang=\"en\">\n")
	builder.WriteString(importStyle("./../../styles/default.css"))
	builder.WriteString(importStyle("./../../styles/list.css"))
	builder.WriteString("<head>\n")
	builder.WriteString("</head>\n")
	builder.WriteString("<body>\n")
	builder.WriteString(GenerateHeader())
	builder.WriteString("<div class=\"container\">\n")
	builder.WriteString(data.GenerateNavigation())
	builder.WriteString("<div class=\"list-container\">\n")
	builder.WriteString("<div class=\"list-holder\">\n")
	builder.WriteString(widgetGenerator.GenerateList())
	builder.WriteString("</div>\n")
	builder.WriteString("</div>\n")
	builder.WriteString("</div>\n")
	builder.WriteString("</body>\n")
	builder.WriteString("</html>\n")

	return builder.String()
}

func (generator *ListGenerator) GenerateListJS(data *PageGenerator) (output string, err error) {
	collection := generator.Widget.GetCollection(data.Data.Collections)

	if collection.Name == "" {
		return "", errors.New("empty collection")
	}

	builder := strings.Builder{}
	builder.WriteString(importAdapter(collection.Name))
	builder.WriteString(fmt.Sprintf("const data = %v.getRows();", utils.ToCamelCase(collection.Name)))
	return builder.String(), nil
}
