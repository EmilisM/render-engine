import { create } from "./engine";
import { Render } from "./types";

export namespace JSX {
  export interface IntrinsicElements extends Render.JSX.IntrinsicElements {}
  export interface ElementAttributesProperty {
    props: {};
  }
  export interface ElementChildrenAttribute {
    children: {};
  }
  export type Element = Render.Element;
  export type ElementType =
    | Render.JSX.IntrinsicElements
    | string
    | ((props: Render.ValueBasedProps) => Render.Element)
    | ((props: Render.ValueBasedProps) => string);
}

export const jsx = create;
export const jsxs = create;
