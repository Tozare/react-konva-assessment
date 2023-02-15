import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/design";


export const ChangeColor = observer(() => {
    const { selectedElement } = useStore();
    if (!selectedElement) {
        return null;
    }
    return (
        <input
            type="color"
            value={`${selectedElement.color}`}
            onChange={(e) => selectedElement.changeColor(e.target.value)}
        />
    );
})