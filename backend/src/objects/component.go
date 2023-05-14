package objects

import "fmt"

type ComponentType struct {
	Name  string `json:"name" db:"name"`
	Color string `json:"color" db:"color"`
}

type Component struct {
	UID        string            `json:"uid" db:"uid"`
	Name       string            `json:"name" db:"name"`
	Type       ComponentType     `json:"type" db:"type"`
	Position   Vector2D          `json:"position" db:"position"`
	Size       Vector2D          `json:"size" db:"size"`
	Properties map[string]string `json:"properties" db:"properties"`
}

func (component *Component) getComponentClassName() (output string) {

	switch component.Type {

	}

	return "item"
}

func (component *Component) getComponentClass() (output string) {
	return fmt.Sprintf("class=\"%v\"", component.getComponentClassName())
}

func (component *Component) getComponentRowStyle() (output string) {
	return fmt.Sprintf("grid-row: %v / %v;", component.Position.X, component.Size.X)
}

func (component *Component) getComponentColStyle() (output string) {
	return fmt.Sprintf("grid-column: %v / %v;", component.Position.Y, component.Size.Y)
}

func (component *Component) getComponentStyle() (output string) {
	return fmt.Sprintf("style=\"%v%v\"", component.getComponentRowStyle(), component.getComponentColStyle())
}

func (component *Component) GenerateComponentHTML() (output string) {
	output = fmt.Sprintf("<div %v %v></div>\n", component.getComponentClass(), component.getComponentStyle())
	return
}
