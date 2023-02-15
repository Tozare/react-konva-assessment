import { Star } from "react-konva";
import { ElementType, Element } from "../store/element";
import { observer } from "mobx-react-lite";
import Konva from "konva";

interface StarProps {
  element: ElementType;
  onSelect: (element: string) => void,
  onDrag: (e: Konva.KonvaEventObject<DragEvent>) => void,
}

export function StarElementImpl(props: StarProps) {
  const {
    element,
    onSelect,
    onDrag,
  } = props;

  return (
    <Star
      key={element.id}
      id={element.id}
      x={element.x}
      y={element.y}
      numPoints={element.numPoints}
      innerRadius={20}
      outerRadius={40}
      fill={element.color}
      onClick={() => {
        onSelect(element.id);
      }}
      draggable
      onDragMove={onDrag}
    />
  );
}

export const StarElement = observer(StarElementImpl);
