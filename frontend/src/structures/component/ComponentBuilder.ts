import { Bound, ComponentStruct } from "./Component";

export class ComponentBuilder {
  component: ComponentStruct = {
    uid: "",
    type: "component",
    bounds: { x: 0, y: 0, width: 100, height: 100 },
    children: [],
    params: { color: "#669944" },
  };

  constructor() {
    this.setUID();
  }

  randUID(): string {
    var u = "",
      i = 0;
    while (i++ < 36) {
      var c = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[i - 1],
        r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      u += c === "-" || c === "4" ? c : v.toString(16);
    }
    return u;
  }

  setUID(): ComponentBuilder {
    this.component.uid = this.randUID();
    return this;
  }

  setType(type: string): ComponentBuilder {
    this.component.type = type;
    return this;
  }

  setBounds(bound: Bound): ComponentBuilder {
    this.component.bounds = bound;
    return this;
  }

  setParam(key: string, value: string): ComponentBuilder {
    this.component.params[key] = value;
    return this;
  }

  build(): ComponentStruct {
    return this.component;
  }
}
