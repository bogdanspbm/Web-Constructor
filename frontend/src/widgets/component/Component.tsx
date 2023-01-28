import { useEffect, useRef, useState } from "react";
import { Group, Rect, Transformer } from "react-konva";

export const Component = (props: any) => {
  const shapeRef: any = useRef();
  const trRef: any = useRef();
  const [isTransforming, setIsTransforming] = useState(false);
  const [customShapeProps, setCustomShapeProps] = useState({});

  const {
    shapeProps,
    isSelected,
    onSelect,
    onChange,
    onDoubleClick,
    component,
    canvasSize,
  } = props;

  function calculateGridSize(): { width: number; height: number } {
    const width = shapeProps.width;
    const height = shapeProps.height;

    return { width: width, height: height };
  }

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
      setCustomShapeProps({});
    }
  }, [isSelected]);

  return (
    <>
      <Group
        onClick={onSelect}
        onTap={onSelect}
        onDblClick={onDoubleClick}
        draggable
        ref={shapeRef}
        {...shapeProps}
        onDragStart={() => setIsTransforming(true)}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
          setIsTransforming(false);
        }}
        onMouseEnter={() =>
          !isSelected &&
          setCustomShapeProps({
            opacity: 0.6,
          })
        }
        onMouseLeave={() => setCustomShapeProps({})}
        onTransformStart={() => setIsTransforming(true)}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
          setIsTransforming(false);
        }}
      >
        <Rect
          cornerRadius={5}
          fill={"green"}
          opacity={0.5}
          width={shapeProps.width}
          height={shapeProps.height}
          {...customShapeProps}
        />
        <Rect
          cornerRadius={5}
          fill={component.params.color}
          width={shapeProps.width}
          height={shapeProps.height}
          {...customShapeProps}
        />
      </Group>
      {isSelected && (
        <>
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // limit resize
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
            rotateEnabled={false}
          />
        </>
      )}
    </>
  );
};
