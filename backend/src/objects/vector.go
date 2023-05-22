package objects

type Vector struct {
	UID     string `json:"uid" db:"uid"`
	Name    string `json:"name" db:"name"`
	Tooltip string `json:"tooltip" db:"tooltip"`
	Base64  string `json:"base64" db:"base64"`
}
