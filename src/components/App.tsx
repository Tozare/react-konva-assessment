import { useRef } from "react";
import { Artboard } from "./Artboard";
import {Toolbar} from "./toolbar";
import Konva from "konva";

export function App() {
  return (
    <div>
      <Artboard/>
      <Toolbar/>
    </div>
  );
}
