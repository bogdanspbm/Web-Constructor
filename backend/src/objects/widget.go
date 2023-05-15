package objects

import (
	"fmt"
	"strings"
)

type Widget struct {
	UID        string               `json:"uid" db:"uid"`
	Name       string               `json:"name" db:"name"`
	Collection string               `json:"collection" db:"collection"`
	Components map[string]Component `json:"components" db:"components"`
}

func importStyle(name string) (output string) {
	output = fmt.Sprintf("<link href='%v' rel='stylesheet' type='text/css'>\n", name)
	return output
}

func (widget *Widget) GenerateWidgetHTML() (output string) {

	builder := strings.Builder{}
	builder.WriteString("<!DOCTYPE html>\n")
	builder.WriteString("<html lang=\"en\">\n")
	builder.WriteString(importStyle("styles/card.css"))
	builder.WriteString("<head>\n")
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
