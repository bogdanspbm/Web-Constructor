package generator

import (
	"../objects"
	"fmt"
	"strings"
)

type CardGenerator struct {
	Widget objects.Widget
}

func NewCardGenerator(widget objects.Widget) *CardGenerator {
	return &CardGenerator{widget}
}

func importStyle(name string) (output string) {
	output = fmt.Sprintf("<link href='%v' rel='stylesheet' type='text/css'>\n", name)
	return output
}

func (generator *CardGenerator) GenerateCardHTML(navigation *PageGenerator) (output string) {

	gridGenerator := NewWidgetGenerator(generator.Widget)

	builder := strings.Builder{}
	builder.WriteString("<!DOCTYPE html>\n")
	builder.WriteString("<html lang=\"en\">\n")
	builder.WriteString(importStyle("./../../styles/default.css"))
	builder.WriteString(importStyle("./../../styles/card.css"))
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
