import { observer } from "mobx-react-lite";
import { Layer, Stage } from "react-konva";
import { StarElement } from "../elements/StarElement";
import { Transformer } from "./transformer";
import { useStore, Store } from "../store/design";
import {ForwardedRef, forwardRef, Ref, useRef} from "react";
import Konva from "konva";
import {GenerateDesignImage} from "../features/generate-design-image/generate-design-image";

const ArtboardImpl = () => {
  const { elements, selectElement } = useStore();
  const ref = useRef<Konva.Stage>(null);
  const layerRef = useRef<Konva.Layer>(null)



  return (
      <>
          <Stage
              id={"STAGE_ID"}
              ref={ref}
              width={window.innerWidth}
              height={window.innerHeight}
              onClick={(e) => {
                  if (e.target.id() === "STAGE_ID") {
                      selectElement()
                  }
              }}
          >
              <Layer ref={layerRef} width={window.innerWidth} height={window.innerHeight}>
                  {elements.map((element) => (
                      <StarElement
                          element={element}
                          key={element.id}
                          onSelect={selectElement}
                          onDrag={element.dragElement}
                      />
                  ))}
              </Layer>
              <Layer>
                  <Transformer stage={ref ? ref.current : null} />
              </Layer>
          </Stage>
          <GenerateDesignImage layer={layerRef ? layerRef.current : null}/>
      </>
  );
}

export const Artboard = observer(ArtboardImpl);
