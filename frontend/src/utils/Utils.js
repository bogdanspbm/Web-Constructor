export function attributeFromMap(map) {
  let result = "";

  Object.entries(map).forEach(([key, value]) => {
    result += key + ":" + value + ";";
  });

  return result;
}
