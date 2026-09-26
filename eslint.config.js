const js = require("@eslint/js");

module.exports = [
  {
    ignores: [
      "node_modules/**",
      "views/**",
      "public/**"
    ]
  },

  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        process: "readonly",
        console: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly"
      }
    },

    rules: {
      "no-unused-vars": "warn"
    }
  }
];