package objects

import (
	"backend/src/utils"
	"fmt"
	"strings"
)

type Widget struct {
	UID        string               `json:"uid" db:"uid"`
	Name       string               `json:"name" db:"name"`
	Collection string               `json:"collection" db:"collection"`
	Vector     string               `json:"vector" db:"vector"`
	Group      string               `json:"group" db:"group"`
	Components map[string]Component `json:"components" db:"components"`
}

func (widget *Widget) GetVector(vectors map[string]Vector) Vector {
	for _, v := range vectors {
		if v.UID == widget.Vector {
			return v
		}
	}

	return Vector{}
}

func (widget *Widget) GetCollection(collections map[string]Collection) Collection {
	for _, v := range collections {
		if v.UID == widget.Collection {
			return v
		}
	}

	return Collection{}
}

func (widget *Widget) GenerateNavigationButton(vectors map[string]Vector) string {
	base64 := widget.GetVector(vectors).Base64

	builder := strings.Builder{}

	builder.WriteString(fmt.Sprintf("<a href=\"./../%v/List%v.html\" class=\"widget-nav-button\">", utils.ToCamelCase(widget.Name), utils.ToPascalCase(widget.Name)))

	if base64 != "" {
		builder.WriteString(fmt.Sprintf("<div class=\"page-icon\" style=\"background-image:url(%v)\"></div>", base64))
	}

	builder.WriteString(fmt.Sprintf("%v</a>", widget.Name))

	return builder.String()
}

func (widget *Widget) HasGroup() bool {
	return widget.Group != ""
}

func (widget *Widget) GetSize() Vector2D {
	x := 0
	y := 0

	for _, component := range widget.Components {
		if component.Position.X+component.Size.X > x {
			x = component.Position.X + component.Size.X
		}
		if component.Position.Y+component.Size.Y > y {
			y = component.Position.Y + component.Size.Y
		}
	}

	return Vector2D{x, y}
}
