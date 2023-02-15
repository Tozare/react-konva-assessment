import React from "react";
import { ChangePointsNumber } from "../features/change-points-number/change-points-number";
import {ChangeColor} from "../features/change-color/change-color";
import {DownloadJson} from "../features/download-json/download-json";
import {UploadJson} from "../features/upload-json/upload-json";
type Props = {

}

export const Toolbar = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: "15px",
                left: `calc((100vw - 500px) / 2)`,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "8px",
                borderRadius: "8px",
                backgroundColor: "grey",
                width: "500px"
            }}
        >
            <DownloadJson />
            <UploadJson />
            <ChangePointsNumber/>
            <ChangeColor />
        </div>
    )
}