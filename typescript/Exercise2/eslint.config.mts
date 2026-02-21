import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import jestplugin from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1. Globally ignore build outputs and node_modules
  { ignores: ["**/node_modules/**", "**/dist/**"] },

  // 2.Standard recommented JS and TS rules
  js.configs.recommended,
  tseslint.configs.recommended,

  // 3. Base Configuration for project files
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "prefer-const": "error",
      "prefer-template": "error",
    },
  },

  // 4. Testing files configuration
  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    plugins: { jest: jestplugin },
    languageOptions: { globals: globals.jest },
    rules: {
      ...jestplugin.configs["flat/recommended"].rules,
    },
  },
]);
