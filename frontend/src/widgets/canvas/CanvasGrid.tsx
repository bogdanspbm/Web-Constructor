import { Group, Rect } from "react-konva";

export const CanvasGrid = (props: any) => {
  const { width, height, addRectToGroup, overlapKeys } = props;
  const colCount = 12;
  const columnWidth = Math.round(width / colCount);
  const columnHeight = 48;
  const columnCount = Math.round(height / columnHeight);

  return (
    <Group>
      {Array.from(Array(colCount * columnCount).keys()).map((value) => {
        const col = value % colCount;
        const row = Math.floor(value / colCount);
        let rectangle = (
          <Rect
            width={columnWidth}
            height={columnHeight}
            x={col * columnWidth}
            y={row * columnHeight}
            key={value}
            fill={overlapKeys.indexOf(value) >= 0 ? "green" : "white"}
            opacity={0.4}
          ></Rect>
        );
        addRectToGroup(rectangle);
        return rectangle;
      })}
    </Group>
  );
};
