import styles from "./Canvas.module.css";
import { Background } from "./Background";
import { Layer, Stage } from "react-konva";

export const Canvas = () => {
  const width = 800;
  const height = 600;

  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        <Stage width={width} height={height} style={{ width, height }}>
          <Layer>
            <Background width={width} height={height} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
