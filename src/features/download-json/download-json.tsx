import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/design";

export const DownloadJson = observer(() => {
    const { downloadDesignAsJson } = useStore();
    return (
        <button type="button" onClick={() => downloadDesignAsJson()}>Download json</button>
    );
})