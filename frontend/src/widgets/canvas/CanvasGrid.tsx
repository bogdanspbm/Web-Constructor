import { Group, Rect } from "react-konva";

export const CanvasGrid = (props: any) => {
  const { width, height, addRectToGroup, overlapKeys } = props;
  const colCount = 12;
  const columnWidth = Math.round(width / colCount);

  return (
    <Group>
      {Array.from(Array(colCount).keys()).map((value) => {
        let rectangle = (
          <Rect
            width={columnWidth}
            height={height}
            x={value * columnWidth}
            y={0}
            key={value}
            fill={overlapKeys.indexOf(value) >= 0 ? "green" : "grey"}
          ></Rect>
        );
        addRectToGroup(rectangle);
        return rectangle;
      })}
    </Group>
  );
};
