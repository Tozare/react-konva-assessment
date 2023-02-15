import { Instance, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { randomInRange } from "../util/randomInRange";
import { Element, ElementType } from "./element";
import Konva from "konva";
import {downloadObjectAsJson} from "../util/download-object-as-json";
import {imageToBlackAndWhite} from "../util/image-to-black-and-white";

function generateInitialState() {
  const initialState = [];

  for (let i = 0; i < 10; i++) {
    initialState.push({
      id: `id-${i}`,
      x: randomInRange(window.innerWidth),
      y: randomInRange(window.innerHeight),
      numPoints: 5,
      color: "#ff7900",
    });
  }

  return initialState;
}


export const Store = types
    .model("Store", {
      selectedElement: types.safeReference(Element),
      elements: types.array(Element),
      imagePreview: types.maybeNull(types.string),
    })
    .actions((self) => ({
      selectElement(newSelectedElementId?: string) {
        self.selectedElement = newSelectedElementId as any;
      },
      downloadDesignAsJson () {
        downloadObjectAsJson(self.elements, "stars");
      },
      uploadDesignAsJson (jsonElements: string) {
        self.elements = JSON.parse(jsonElements);
      },
      generateImagePreview (layer: Konva.Layer) {
        imageToBlackAndWhite(layer).then(self.setImagePreview);
        // self.imagePreview = imageToBlackAndWhite(layer);
      },
      setImagePreview (url: string) {
        self.imagePreview = url;
      },
      resetImagePreview () {
        self.imagePreview = null;
      },
    }));

export type StoreType = Instance<typeof Store>;
const store = Store.create({
  elements: generateInitialState(),
  selectedElement: "",
  imagePreview: null,
});

export default store;

export const StoreContext = createContext<StoreType>(store);

export const useStore = () => useContext(StoreContext);
