package utils

import (
	"archive/zip"
	"crypto/rand"
	"io"
	"io/ioutil"
	"math/big"
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

func RemoveDirectory(path string) error {
	return os.RemoveAll(path)
}

func GenerateUID(length int) (string, error) {
	charset := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	charsetLength := big.NewInt(int64(len(charset)))

	result := make([]byte, length)
	for i := 0; i < length; i++ {
		index, err := rand.Int(rand.Reader, charsetLength)
		if err != nil {
			return "", err
		}
		result[i] = charset[index.Int64()]
	}

	return string(result), nil
}

func CreateZipFile(output string, path string) error {
	// Create a new ZIP file
	zipFile, err := os.Create(output)
	if err != nil {
		return err
	}
	defer zipFile.Close()

	// Create a new ZIP writer
	zipWriter := zip.NewWriter(zipFile)
	defer zipWriter.Close()

	// Walk through the directory and add files to the ZIP archive
	err = filepath.WalkDir(path, func(filePath string, info os.DirEntry, err error) error {
		if err != nil {
			return err
		}

		// Skip directories
		if info.IsDir() {
			return nil
		}

		// Open the source file
		srcFile, err := os.Open(filePath)
		if err != nil {
			return err
		}
		defer srcFile.Close()

		// Create a new file inside the ZIP archive using the relative path
		relPath, err := filepath.Rel(path, filePath)
		if err != nil {
			return err
		}

		zipFile, err := zipWriter.Create(relPath)
		if err != nil {
			return err
		}

		// Copy the contents of the source file to the ZIP file
		_, err = io.Copy(zipFile, srcFile)
		if err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		return err
	}

	return nil
}
