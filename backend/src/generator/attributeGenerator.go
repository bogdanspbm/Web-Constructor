package generator

import (
	"../objects"
	"../utils"
	"fmt"
	"strings"
)

type AttributeGenerator struct {
	Attribute objects.Attribute
}

func NewAttributeGenerator(attribute objects.Attribute) *AttributeGenerator {
	return &AttributeGenerator{attribute}
}

func (generator *AttributeGenerator) GeneratePrivateAttribute() string {
	return fmt.Sprintf("#%v;\n", utils.ToCamelCase(generator.Attribute.Name))
}

func (generator *AttributeGenerator) GenerateAttributeConstructor() string {
	camelName := utils.ToCamelCase(generator.Attribute.Name)
	return fmt.Sprintf("this.#%v = json.%v;\n", camelName, camelName)
}

func (generator *AttributeGenerator) GenerateAttributeGetter() string {
	builder := strings.Builder{}
	builder.WriteString(fmt.Sprintf("%v() {\n", utils.ToCamelCase(fmt.Sprintf("get %v", generator.Attribute.Name))))
	builder.WriteString(fmt.Sprintf("return this.#%v;\n", utils.ToCamelCase(generator.Attribute.Name)))
	builder.WriteString("}\n")
	return builder.String()
}
