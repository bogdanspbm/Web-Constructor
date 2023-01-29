import { ReactElement } from "react";
import { Bound } from "../structures/component/Component";

export function haveIntersection(r1: ReactElement, r2: Bound) {
  return !(
    r2.x > r1.props.x + r1.props.width ||
    r2.x + r2.width < r1.props.x ||
    r2.y > r1.props.y + r1.props.height ||
    r2.y + r2.height < r1.props.y
  );
}
