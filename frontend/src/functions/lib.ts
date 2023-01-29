import { ReactElement } from "react";
import { Bound, ComponentObject } from "../structures/component/Component";

export function haveIntersection(r1: ReactElement, r2: Bound) {
  const component = new ComponentObject(r2);
  const normalize = component.getGridBounds(800);

  const res = !(
    normalize.x >= r1.props.x + r1.props.width ||
    normalize.x + r2.width <= r1.props.x ||
    normalize.y >= r1.props.y + r1.props.height ||
    normalize.y + r2.height <= r1.props.y
  );

  return res;
}
