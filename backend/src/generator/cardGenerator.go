package generator

import (
	"../objects"
	"fmt"
	"strings"
)

type CardGenerator struct {
	Widget objects.Widget
}

func generateDefaultStyle() (output string) {
	builder := strings.Builder{}
	builder.WriteString("<style>\n")
	builder.WriteString(".grid {\n            display: grid;\n            width: 100vw;\n            height: 100vh;\n            grid-template-columns: repeat(12, 1fr);\n            grid-gap: 10px;\n        }")
	builder.WriteString(".item {\n            background-color: #ccc;\n            padding: 10px;\n            text-align: center;\n        }")
	builder.WriteString("</style>\n")
	return builder.String()
}

func importStyle(name string) (output string) {
	output = fmt.Sprintf("<link href='%v' rel='stylesheet' type='text/css'>\n", name)
	return output
}

func NewCardGenerator(widget objects.Widget) *CardGenerator {
	return &CardGenerator{widget}
}

func (generator *CardGenerator) GenerateCardHTML(navigation *NavigationGenerator) (output string) {

	gridGenerator := NewWidgetGenerator(generator.Widget)

	builder := strings.Builder{}
	builder.WriteString("<!DOCTYPE html>\n")
	builder.WriteString("<html lang=\"en\">\n")
	builder.WriteString(importStyle("styles/default.css"))
	builder.WriteString(importStyle("styles/card.css"))
	builder.WriteString("<head>\n")
	builder.WriteString("</head>\n")
	builder.WriteString("<body>\n")
	builder.WriteString(GenerateHeader())
	builder.WriteString("<div class=\"container\">\n")
	builder.WriteString(navigation.GenerateNavigation())
	builder.WriteString("<div class=\"card-container\">\n")
	builder.WriteString("<div class=\"card-holder\">\n")
	builder.WriteString(gridGenerator.GenerateGrid())
	builder.WriteString("</div>\n")
	builder.WriteString("</div>\n")
	builder.WriteString("</div>\n")
	builder.WriteString("</body>\n")
	builder.WriteString("</html>\n")

	return builder.String()
}
