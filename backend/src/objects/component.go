package objects

type Component struct {
	UID        string            `json:"uid" db:"uid"`
	Name       string            `json:"name" db:"name"`
	Type       string            `json:"type" db:"type"`
	Position   Vector2D          `json:"position" db:"position"`
	Size       Vector2D          `json:"size" db:"size"`
	Properties map[string]string `json:"properties" db:"properties"`
}
