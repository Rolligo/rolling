module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off", // JSX를 사용할 때 React가 일일이 import되지 않으면 에러 -> off
    "no-unused-vars": "off", // 사용하지 않는 변수가 있을 때 에러 -> off
    "react/prop-types": "off", // prop의 타입을 정의해주지 않으면 에러 -> off
  },
};
