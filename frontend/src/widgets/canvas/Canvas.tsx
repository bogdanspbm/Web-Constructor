import styles from "./Canvas.module.css";
import { Background } from "./Background";
import { Layer, Stage } from "react-konva";
import { ComponentCanvas } from "../component/ComponentCanvas";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getCanvasSize,
  getOverlapKeys,
  setOverlapKeys,
} from "../../structures/canvas/Canvas";
import { CanvasGrid } from "./CanvasGrid";
import { ReactElement } from "react";
import { haveIntersection } from "../../functions/lib";

export const Canvas = () => {
  const canvasSize = useAppSelector(getCanvasSize);
  const dispatch = useAppDispatch();
  const width = canvasSize.width;
  const height = canvasSize.height;
  const overlapKeys = useAppSelector(getOverlapKeys);

  let group: ReactElement[] = [];

  function onDragEvent(drag: any) {
    const bound = { x: drag.attrs.x, y: drag.attrs.y, width: 100, height: 100 };
    let result: number[] = [];
    group.forEach((el) => {
      if (haveIntersection(el, bound)) {
        const key = el.key;
        if (key) {
          const strVal = key.toString();
          result.push(Number(strVal));
        }
      }
    });

    if (overlapKeys !== result) {
      dispatch(setOverlapKeys({ keys: result }));
    }
  }

  function addRectToGroup(rectangle: ReactElement) {
    group.push(rectangle);
  }

  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        <Stage
          width={canvasSize.width}
          height={canvasSize.height}
          style={{ width, height }}
        >
          <Layer className={"grid-panel"}>
            <Background width={canvasSize.width} height={canvasSize.height} />
            <CanvasGrid
              width={canvasSize.width}
              height={canvasSize.height}
              overlapKeys={overlapKeys}
              addRectToGroup={addRectToGroup}
            />
          </Layer>
          <Layer onDragMove={(e) => onDragEvent(e.target)}>
            <ComponentCanvas />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
