import React, {ChangeEvent, useRef, useState} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/design";

export const UploadJson = observer(() => {
    const { uploadDesignAsJson } = useStore();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [key, setKey] = useState("json-upload");

    const handleUploadClick = () => {
        inputRef.current?.click();
    };


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        const file = e.target.files[0];
        const reader = new FileReader();
        function readFile(event: any) {
            uploadDesignAsJson(event.target.result);
            const date = new Date();
            setKey(date.toDateString())
        }
        reader.addEventListener('load', readFile);
        reader.readAsText(file);
    };

    return (
        <div>
            <button onClick={handleUploadClick}>
                Upload design as JSON
            </button>
            <input
                key={key}
                type="file"
                accept=".json"
                ref={inputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </div>
    )
})