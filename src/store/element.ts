import { Instance, types } from "mobx-state-tree";
import Konva from "konva";

const ElementAttrs = {
  x: 0,
  y: 0,
  numPoints: 5,
};

export type ElementAttrsType = typeof ElementAttrs;

export const Element = types.model("Element", {
  id: types.identifier,
  x: types.number,
  y: types.number,
  numPoints: types.number,
}).actions((self) => ({
  // set(attrs: Partial<ElementAttrsType>) {
  //   Object.assign(self, attrs);
  // },
  dragElement: (e: Konva.KonvaEventObject<DragEvent>) => {
    Object.assign(self, { x: e.target.x(), y: e.target.y() });
  }
}));

export type ElementType = Instance<typeof Element>;

