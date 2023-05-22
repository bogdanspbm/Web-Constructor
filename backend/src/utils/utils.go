package utils

import (
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
)

func StringToFile(path string, str string) error {
	dir := filepath.Dir(path)
	if err := os.MkdirAll(dir, os.ModePerm); err != nil {
		return err
	}

	return ioutil.WriteFile(path, []byte(str), 0644)
}

func ToPascalCase(input string) string {
	// Remove any special characters or punctuation marks
	input = removeSpecialCharacters(input)

	// Capitalize the first letter of the string
	pascalCase := capitalize(input)

	return pascalCase
}

func ToCamelCase(text string) string {
	// Remove any special characters or punctuation marks
	//text = removeSpecialCharacters(text)

	if text == "" {
		return ""
	}

	// Split the text into individual words
	words := strings.Fields(text)

	words[0] = strings.ToLower(words[0])

	// Capitalize the first letter of each word except the first one
	for i := 1; i < len(words); i++ {
		words[i] = capitalize(words[i])
	}

	// Join the words together without any separators
	camelCaseText := strings.Join(words, "")

	return camelCaseText
}

// Helper function to remove special characters
func removeSpecialCharacters(text string) string {
	var sb strings.Builder
	for _, c := range text {
		if (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') {
			sb.WriteRune(c)
		}
	}
	return sb.String()
}

// Helper function to capitalize the first letter of a word
func capitalize(word string) string {
	if len(word) == 0 {
		return word
	}
	firstChar := strings.ToUpper(string(word[0]))
	return firstChar + word[1:]
}
