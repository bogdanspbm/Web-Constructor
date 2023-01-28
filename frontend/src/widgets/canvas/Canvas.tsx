import styles from "./Canvas.module.css";
import { Background } from "./Background";
import { Layer, Stage } from "react-konva";
import { ComponentCanvas } from "../component/ComponentCanvas";
import { useAppSelector } from "../../app/hooks";
import { getCanvasSize } from "../../structures/canvas/Canvas";

export const Canvas = () => {
  const canvasSize = useAppSelector(getCanvasSize);
  const width = canvasSize.width;
  const height = canvasSize.height;

  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        <Stage
          width={canvasSize.width}
          height={canvasSize.height}
          style={{ width, height }}
        >
          <Layer>
            <Background width={canvasSize.width} height={canvasSize.height} />
          </Layer>
          <Layer>
            <ComponentCanvas />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
