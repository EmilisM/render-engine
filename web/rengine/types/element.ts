interface RenderBaseElement {
  type: string;
  props: {};
}

interface BlockElement<T> extends RenderBaseElement {
  type: "block";
  props: {
    children: T;
  };
}

type RenderBlockElement = BlockElement<RenderElement[]>;

interface LinkElement<T> extends RenderBaseElement {
  type: "link";
  props: {
    children: T;
  };
}

type RenderLinkElement = LinkElement<RenderElement[]>;

export interface RenderTextElement extends RenderBaseElement {
  type: "text";
  props: {
    value: string;
  };
}

export type RenderElement =
  | RenderLinkElement
  | RenderBlockElement
  | RenderTextElement;

export interface RenderCreatableElements {
  block: BlockElement<
    (RenderElement | string)[] | string | RenderElement
  >["props"];
  link: LinkElement<(RenderElement | string)[] | string>["props"];
}
