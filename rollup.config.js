import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";

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
    commonjs(),
    uglify(),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
