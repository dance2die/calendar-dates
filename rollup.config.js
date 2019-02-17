import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/calendardates.cjs.js",
      format: "cjs",
      name: "calendar-dates"
    },
    {
      file: "dist/calendardates.esm.js",
      format: "es",
      name: "calendar-dates"
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs(),
    terser()
  ]
};
