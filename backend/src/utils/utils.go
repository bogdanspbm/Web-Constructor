package utils

import (
	"io/ioutil"
)

func StringToFile(path string, str string) error {
	return ioutil.WriteFile(path, []byte(str), 0644)
}
