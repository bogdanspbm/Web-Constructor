import { Group } from "react-konva";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getComponents,
  getSelected,
  select,
  transform,
} from "../../structures/component/Component";
import { Component } from "./Component";

export const ComponentCanvas = () => {
  const dispatch = useAppDispatch();
  const components = useAppSelector(getComponents);
  const selected = useAppSelector(getSelected);

  if (!components) {
    return <></>;
  }

  return (
    <Group>
      {components.map((component) => {
        return (
          <Component
            key={component.uid}
            shapeProps={{
              ...component.bounds,
            }}
            component={component}
            isSelected={selected && component.uid === selected.uid}
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
