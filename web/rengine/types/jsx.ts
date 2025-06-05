import { RenderElement } from "./element";

interface JSXBlockElement {
  children: string | RenderElement | (string | RenderElement)[];
  layout?: "row" | "column";
}

interface JSXLinkElement {
  children: string;
}

export interface JSXIntrinsicElements {
  block: JSXBlockElement;
  link: JSXLinkElement;
}
