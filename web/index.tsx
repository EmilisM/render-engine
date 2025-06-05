import REngine, { Render } from "@rengine";

const Hello = (): string => {
  return "Hello";
};

const Greeting = ({ name }: { name: string }): Render.Element => {
  return (
    <block layout="row">
      Hello
      <Hello />, {name}!
    </block>
  );
};

const App = () => {
  return (
    <block>
      <Greeting name="World" />
    </block>
  );
};

REngine.render(<App />, document.getElementById("root")!);
