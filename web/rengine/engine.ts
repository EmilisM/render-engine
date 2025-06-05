import { Render } from "./types";

export function create<T extends keyof Render.CreatableElements>(
  type: T | ((props: Render.ValueBasedProps) => Render.Element),
  props: Render.CreatableElements[T]
): Render.Element {
  if (typeof type === "function") {
    return createFunction(type, props);
  }

  return createElement(type, props);
}

function createFunction(
  fn: (props: Render.ValueBasedProps) => Render.Element,
  props: Render.ValueBasedProps
): Render.Element {
  return fn(props);
}

function createElement<T extends keyof Render.CreatableElements>(
  type: T,
  props: Render.CreatableElements[T]
): Render.Element {
  return {
    type: type,
    props: {
      ...props,
      children: createChildren(props.children),
    },
  };
}

function createChildren<T extends keyof Render.CreatableElements>(
  children: Render.CreatableElements[T]["children"]
): Render.Element[] {
  if (typeof children === "string") {
    return [createTextElement(children)];
  }

  if (Array.isArray(children)) {
    return children.map((child) =>
      typeof child === "string" ? createTextElement(child) : child
    );
  }

  return [children];
}

const createTextElement = (value: string): Render.TextElement => {
  return {
    type: "text",
    props: {
      value: value,
    },
  };
};

const createNode = (element: Render.Element): HTMLElement | Text => {
  switch (element.type) {
    case "block": {
      return document.createElement("div");
    }
    case "link": {
      return document.createElement("a");
    }
    case "text": {
      return document.createTextNode(element.props.value);
    }
  }
};

export const render = (
  element: Render.Element,
  container: HTMLElement | Text
) => {
  const node = createNode(element);

  if (element.type === "block" || element.type === "link") {
    element.props.children?.forEach((child) => {
      render(child, node);
    });
  }

  container.appendChild(node);
};
