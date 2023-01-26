import { Rect } from "react-konva";

export const Background = (props: any) => {
  const { width, height } = props;
  return <Rect width={width} height={height}></Rect>;
};
