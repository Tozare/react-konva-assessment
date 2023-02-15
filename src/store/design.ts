import { Instance, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { randomInRange } from "../util/randomInRange";
import { Element, ElementType } from "./element";
import Konva from "konva";
import {downloadObjectAsJson} from "../util/download-object-as-json";

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
    })
    .actions((self) => ({
      selectElement(newSelectedElementId?: string) {
        console.log(newSelectedElementId);
        self.selectedElement = newSelectedElementId as any;
      },
      downloadDesignAsJson () {
        downloadObjectAsJson(self.elements, "stars");
      },
      uploadDesignAsJson (jsonElements: string) {
        console.log(JSON.parse(jsonElements));
        self.elements = JSON.parse(jsonElements);
      }
    }));

export type StoreType = Instance<typeof Store>;
const store = Store.create({
  elements: generateInitialState(),
  selectedElement: "",
});
console.log("store", store.selectedElement);

export default store;

export const StoreContext = createContext<StoreType>(store);

export const useStore = () => useContext(StoreContext);
