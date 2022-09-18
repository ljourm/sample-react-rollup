import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: {
    file: packageJson.main,
    format: "cjs",
    sourcemap: true,
  },
  treeshake: "safest",
  plugins: [
    peerDepsExternal(),
    typescript(),
    resolve(),
    commonjs(),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: true,
    }),
    terser(),
  ],
};
