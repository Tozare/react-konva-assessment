import { observer } from "mobx-react-lite";
import { Layer, Stage } from "react-konva";
import { StarElement } from "../elements/StarElement";
import { Transformer } from "./transformer";
import { useStore, Store } from "../store/design";
import {useRef} from "react";
import Konva from "konva";

function ArtboardImpl() {
  const { elements, selectElement } = useStore();
  const ref = useRef<Konva.Stage>(null);
  return (
    <Stage ref={ref} width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {elements.map((element) => (
          <StarElement
              element={element}
              key={element.id}
              onSelect={selectElement}
              onDrag={element.dragElement}
          />
        ))}
          <Transformer stage={ref ? ref.current : null} />
      </Layer>
    </Stage>
  );
}

export const Artboard = observer(ArtboardImpl);
