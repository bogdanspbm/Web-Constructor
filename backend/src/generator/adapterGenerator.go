package generator

import (
	"backend/src/objects"
	"backend/src/utils"
	"fmt"
	"strings"
)

type AdapterGenerator struct {
	Collection objects.Collection
}

func NewAdapterGenerator(collection objects.Collection) *AdapterGenerator {
	return &AdapterGenerator{collection}
}

func (generator *AdapterGenerator) GenerateAdapter() string {
	name := utils.ToPascalCase(generator.Collection.Name)

	builder := strings.Builder{}
	builder.WriteString(fmt.Sprintf("export class %vAdapter{\n", name))
	builder.WriteString(fmt.Sprintf("get%vs(){}\n", name))
	builder.WriteString(fmt.Sprintf("get%v(id){}\n", name))
	builder.WriteString(fmt.Sprintf("update%v(%v){}\n", name, utils.ToCamelCase(generator.Collection.Name)))
	builder.WriteString(fmt.Sprintf("create%v(%v){}\n", name, utils.ToCamelCase(generator.Collection.Name)))
	builder.WriteString("}")
	return builder.String()
}
