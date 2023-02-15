import React, {useEffect, useRef} from "react";
import { Transformer as TransformerView } from "react-konva";
import Konva from "konva";
import { useStore } from "../store/design";
import { observer } from "mobx-react-lite";

type Props = {
    stage: Konva.Stage | null
}

export const Transformer = observer(({ stage }: Props) => {
    const { selectedElement } = useStore();
    const ref = useRef<Konva.Transformer>(null);
    useEffect(() => {
        if (stage && ref.current) {
            const nodes = !!selectedElement
                ? stage.find(`#${selectedElement.id}`)
                : [];
            ref.current.nodes(nodes);
        }
    }, [ref, stage, selectedElement]);

    return (
        <TransformerView
            ref={ref}
            borderStroke={"blue"}
            // borderDash={}
            anchorStroke={"blue"}
            rotateEnabled={false}
            resizeEnabled={false}
            draggable={false}
            anchorSize={5}
        />
    )
})