/** @type {import('tailwindcss').Config} */

import { fontFamily } from "./src/styles/font-family";
import { colors } from "./src/styles/colors";
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: colors,
      fontFamily: fontFamily,
    },
  },
  plugins: [],
};
