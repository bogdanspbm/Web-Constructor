package objects

import "fmt"

type Widget struct {
	UID        string               `json:"uid" db:"uid"`
	Name       string               `json:"name" db:"name"`
	Collection string               `json:"collection" db:"collection"`
	Vector     string               `json:"vector" db:"vector"`
	Group      string               `json:"group" db:"group"`
	Components map[string]Component `json:"components" db:"components"`
}

func (widget *Widget) GenerateNavigationButton() string {
	return fmt.Sprintf("<div class=\"widget-nav-button\">%v</div>", widget.Name)
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
