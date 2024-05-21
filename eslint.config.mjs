import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    rules: {
      "no-unused-vars": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
      "no-var": "error",
    },
  },
  {
    ignores: ["**/node_modules/", "**.dist/"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
