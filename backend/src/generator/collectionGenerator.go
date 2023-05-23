package generator

import (
	"backend/src/objects"
	"backend/src/utils"
	"fmt"
	"strings"
)

type CollectionGenerator struct {
	Collection objects.Collection
}

func NewCollectionGenerator(collection objects.Collection) *CollectionGenerator {
	return &CollectionGenerator{collection}
}

func (generator *CollectionGenerator) GenerateCollection() string {
	builder := strings.Builder{}

	builder.WriteString(fmt.Sprintf("export class %v {\n", utils.ToPascalCase(generator.Collection.Name)))

	for _, attribute := range generator.Collection.Attributes {
		attGenerator := NewAttributeGenerator(attribute)
		builder.WriteString(attGenerator.GeneratePrivateAttribute())
	}

	builder.WriteString("constructor(json) {\n")

	for _, attribute := range generator.Collection.Attributes {
		attGenerator := NewAttributeGenerator(attribute)
		builder.WriteString(attGenerator.GenerateAttributeConstructor())
	}

	builder.WriteString("}\n")

	for _, attribute := range generator.Collection.Attributes {
		attGenerator := NewAttributeGenerator(attribute)
		builder.WriteString(attGenerator.GenerateAttributeGetter())
	}

	builder.WriteString("}\n")

	return builder.String()
}
