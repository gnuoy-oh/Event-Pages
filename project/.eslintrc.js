module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: ["plugin:vue/recommended"],
  plugins: ["vue"],
  rules: {
    "generator-star-spacing": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
