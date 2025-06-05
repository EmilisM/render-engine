import {
  RenderCreatableElements,
  RenderElement,
  RenderTextElement,
} from "./element";
import { type JSXIntrinsicElements } from "./jsx";

export declare namespace Render {
  namespace JSX {
    type IntrinsicElements = JSXIntrinsicElements;
  }
  type Element = RenderElement;
  type TextElement = RenderTextElement;
  type CreatableElements = RenderCreatableElements;
  type ValueBasedProps = any;
}
