import React, {ChangeEvent, useRef, useState} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/design";
import Konva from "konva";

type Props = {
    layer: Konva.Layer | null,
}

export const GenerateDesignImage = observer(({ layer } : Props) => {
    if (!layer) return null;

    const { imagePreview, generateImagePreview, resetImagePreview } = useStore();

    return (
        <div >
            <button style={{ position: "absolute", right: "0px", top: "0px"}} onClick={() => generateImagePreview(layer)}>Preview</button>
            {
                imagePreview && (
                    <div style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        width: "200px",
                        height: "300px",
                        border: "1px solid gray",
                        backgroundColor: "white"
                    }}>
                        <button onClick={() => resetImagePreview()}>Close Preview</button>
                        <img
                            src={imagePreview}
                            style={{width: "200px", height: "300px", objectFit: "contain"}}
                        />
                    </div>
                )
            }
        </div>
    )
})