module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["prettier"],
  env: {
    browser: true
  },
  rules: {
    "react/jsx-filename-extension": "off",
    semi: [2, "never"],
    "linebreak-style": 0
  }
};
