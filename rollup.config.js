import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import packageJson from "./package.json";

const plugins = [
  resolve(),
  commonjs(),
  terser(),
];

const exclude = [
  "node_modules",
  "lib",
  "src/**/*.stories.{ts,js}",
  "src/**/*.test.*",
];

const typescriptConfig = {
  declaration: true,
  declarationDir: "./lib",
  rootDir: "src/",
  exclude,
};

export default [
  {
    input: "src/index.ts",
    output: { dir: "./", entryFileNames: packageJson.main, format: "cjs" },
    plugins: [...plugins, typescript(typescriptConfig)],
  },
  {
    input: "src/index.ts",
    output: { file: packageJson.module, format: "esm" },
    plugins: [...plugins, typescript({ exclude })],
  },
];
