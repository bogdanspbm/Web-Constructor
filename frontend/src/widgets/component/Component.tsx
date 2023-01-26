import { useEffect, useRef, useState } from "react";
import { Group, Rect, Transformer } from "react-konva";

export const Component = (props: any) => {
  const shapeRef: any = useRef();
  const trRef: any = useRef();
  const [isTransforming, setIsTransforming] = useState(false);
  const [customShapeProps, setCustomShapeProps] = useState({});
  const { component, isSelected, onSelect, onChange, onDoubleClick } = props;

  useEffect(() => {
    if (isSelected) {
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
        onDragStart={() => setIsTransforming(true)}
        onDragEnd={(e) => {
          onChange({
            x: e.target.x(),
            y: e.target.y(),
            width: component.bounds.width,
            height: component.bounds.height,
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

          node.scaleX(1);
          node.scaleY(1);
          onChange({
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
          setIsTransforming(false);
        }}
      >
        {
          <Rect
            cornerRadius={5}
            fill={component.params.color}
            width={component.bounds.width}
            height={component.bounds.height}
            {...customShapeProps}
          />
        }
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
