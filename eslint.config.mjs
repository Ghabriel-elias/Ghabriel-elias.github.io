import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const config = [
  ...coreWebVitals,
  ...typescript,
  { ignores: [".next/**", "out/**", "node_modules/**"] },
  {
    files: ["src/screens/doc/content/**/*.tsx"],
    rules: { "react/no-unescaped-entities": "off" },
  },
];

export default config;
