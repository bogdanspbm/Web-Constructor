package objects

import "fmt"

type Widget struct {
	UID        string               `json:"uid" db:"uid"`
	Name       string               `json:"name" db:"name"`
	Collection string               `json:"collection" db:"collection"`
	Components map[string]Component `json:"components" db:"components"`
}

func (widget *Widget) GenerateNavigationButton() string {
	return fmt.Sprintf("<div class=\"widget-nav-button\">%v</div>", widget.Name)
}
