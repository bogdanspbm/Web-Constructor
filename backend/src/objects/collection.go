package objects

type Collection struct {
	UID        string               `json:"uid" db:"uid"`
	Name       string               `json:"name" db:"name"`
	Attributes map[string]Attribute `json:"attributes" db:"attributes"`
}
