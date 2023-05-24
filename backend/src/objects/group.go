package objects

import (
	"fmt"
	"strings"
)

type Group struct {
	UID     string `json:"uid" db:"uid"`
	Name    string `json:"name" db:"name"`
	Tooltip string `json:"tooltip" db:"tooltip"`
	Vector  string `json:"vector" db:"vector"`
}

func (group *Group) GetVector(vectors map[string]Vector) Vector {
	for _, v := range vectors {
		if v.UID == group.Vector {
			return v
		}
	}

	return Vector{}
}

func (group *Group) FilterWidgets(widgets map[string]Widget) map[string]Widget {
	output := make(map[string]Widget)

	for k, widget := range widgets {
		if widget.Group != group.UID {
			continue
		}

		output[k] = widget
	}

	return output
}

func (group *Group) GenerateGroup(widgets map[string]Widget, vectors map[string]Vector) string {

	vector := group.GetVector(vectors)

	builder := strings.Builder{}
	builder.WriteString("<details>\n")
	builder.WriteString("<summary class=\"unselectable\">")
	if vector.Base64 != "" {
		builder.WriteString(fmt.Sprintf("<div class=\"group-icon\" style=\"background-image:url(%v)\"></div>", vector.Base64))
	}
	builder.WriteString(fmt.Sprintf("%v</summary>\n", group.Name))
	builder.WriteString("<div class=\"collapse\">\n")
	builder.WriteString("<div class=\"collapse-item\">\n")
	builder.WriteString("<div class=\"vertical-container\">\n")

	for _, widget := range group.FilterWidgets(widgets) {
		tmpVector := widget.GetVector(vectors)
		builder.WriteString("<div class=\"widget-nav-button\">")
		if tmpVector.Base64 != "" {
			builder.WriteString(fmt.Sprintf("<div class=\"page-icon\" style=\"background-image:url(%v)\"></div>", tmpVector.Base64))
		}
		builder.WriteString(fmt.Sprintf("%v</div>\n", widget.Name))

	}

	builder.WriteString("</div>\n")
	builder.WriteString("</div>\n")
	builder.WriteString("</div>\n")
	builder.WriteString("</details>\n")
	return builder.String()
}
