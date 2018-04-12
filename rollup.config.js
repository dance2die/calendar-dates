import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "dist/calendardates.js",
    format: "cjs",
    name: "calendar-dates"
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
