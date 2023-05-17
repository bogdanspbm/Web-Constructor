package objects

type Collection struct {
	UID        string               `json:"uid" db:"uid"`
	Name       string               `json:"name" db:"name"`
	Script     Script               `json:"script" db:"script"`
	Attributes map[string]Attribute `json:"attributes" db:"attributes"`
}
