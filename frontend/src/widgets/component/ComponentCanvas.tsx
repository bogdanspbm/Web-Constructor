import { Group } from "react-konva";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  Bound,
  getComponents,
  getSelected,
  select,
  transform,
} from "../../structures/component/Component";
import { Component } from "./Component";
import {
  getCanvasSize,
  setIsTransform,
  setTransformBound,
} from "../../structures/canvas/Canvas";

export const ComponentCanvas = () => {
  const dispatch = useAppDispatch();
  const components = useAppSelector(getComponents);
  const selected = useAppSelector(getSelected);
  const canvasSize = useAppSelector(getCanvasSize);

  if (!components) {
    return <></>;
  }

  return (
    <Group>
      {components.map((component) => {
        return (
          <Component
            canvasSize={canvasSize}
            key={component.uid}
            shapeProps={{
              ...component.bounds,
            }}
            component={component}
            isSelected={selected && component.uid === selected.uid}
            setTransformingBounds={(bounds: Bound) => {
              dispatch(setTransformBound({ bounds: bounds }));
            }}
            onTransformingChange={(value: boolean) =>
              dispatch(setIsTransform({ isTransforming: value }))
            }
            onSelect={() => dispatch(select({ uid: component.uid }))}
            onChange={(newAttrs: any) => {
              dispatch(
                transform({
                  uid: component.uid,
                  bounds: {
                    x: newAttrs.x,
                    y: newAttrs.y,
                    width: newAttrs.width,
                    height: newAttrs.height,
                  },
                })
              );
            }}
          ></Component>
        );
      })}
    </Group>
  );
};
