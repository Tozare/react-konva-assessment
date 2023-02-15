import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/design";


export const ChangePointsNumber = observer(() => {
    const { selectedElement } = useStore();
    if (!selectedElement) {
        return null;
    }
    return (
        <input
            type="range"
            min="2"
            max="100"
            value={`${selectedElement.numPoints}`}
            onChange={(e) => selectedElement.changePointsNumber(Number(e.target.value))}
        />
    );
})