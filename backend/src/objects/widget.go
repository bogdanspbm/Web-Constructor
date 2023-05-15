package objects

import "strings"

type Widget struct {
	UID        string               `json:"uid" db:"uid"`
	Name       string               `json:"name" db:"name"`
	Collection string               `json:"collection" db:"collection"`
	Components map[string]Component `json:"components" db:"components"`
}

func generateDefaultStyle() (output string) {
	builder := strings.Builder{}
	builder.WriteString("<style>\n")
	builder.WriteString(".grid {\n            display: grid;\n			grid-template-rows: repeat(12, 42px);\n            width: 100vw;\n            height: 100vh;\n            grid-template-columns: repeat(12, 1fr);\n            grid-gap: 10px;\n        }")
	builder.WriteString(".item {\n            background-color: #ccc;\n            padding: 10px;\n            text-align: center;\n        }")
	builder.WriteString("</style>\n")
	return builder.String()
}

func (widget *Widget) GenerateWidgetHTML() (output string) {

	builder := strings.Builder{}
	builder.WriteString("<!DOCTYPE html>\n")
	builder.WriteString("<html lang=\"en\">\n")
	builder.WriteString("<head>\n")
	builder.WriteString(generateDefaultStyle())
	builder.WriteString("</head>\n")
	builder.WriteString("<body>\n")
	builder.WriteString("<div class=\"grid\">\n")

	for _, v := range widget.Components {
		builder.WriteString(v.GenerateComponentHTML())
	}

	builder.WriteString("</div>\n")
	builder.WriteString("</body>\n")
	builder.WriteString("</html>\n")

	return builder.String()
}
