import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import js from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  js.configs.recommended,
  ...nextVitals,
  eslintConfigPrettier,
  // Jest plugin with recommended rules
  {
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      // Load all recommended rules from the plugin
      ...jestPlugin.configs.recommended.rules,
    },
    languageOptions: {
      globals: jestPlugin.environments.globals.globals,
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
