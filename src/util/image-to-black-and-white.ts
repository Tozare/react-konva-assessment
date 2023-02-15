import Konva from "konva";

export const imageToBlackAndWhite = (layer: Konva.Layer): Promise<string> => {
    return new Promise((resolve, reject) => {
        const dataURL = layer.toDataURL({ pixelRatio: 3 });
        const image = document.createElement("img");
        image.setAttribute('src', dataURL);
        // image.setAttribute('alt', 'na') ;
        image.setAttribute('height', `${window.innerHeight}`);
        image.setAttribute('width', `${window.innerWidth}`);
        document.body.appendChild(image);
        const canvas=document.createElement("canvas");
        const ctx=canvas.getContext("2d");
        canvas.width= window.innerWidth;
        canvas.height= window.innerHeight;
        ctx.filter = "grayscale()"
        image.onload = function() {
            ctx.drawImage(image,0,0,window.innerWidth,window.innerHeight);
            const canvasUrl = canvas.toDataURL()
            resolve(canvasUrl);
        }
    });
}