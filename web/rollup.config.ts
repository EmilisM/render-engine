import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";

const options: RollupOptions = {
  input: "index.tsx",
  output: {
    file: "../public/index.js",
  },
  plugins: [resolve(), typescript()],
};

export default options;
