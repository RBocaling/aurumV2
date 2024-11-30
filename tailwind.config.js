/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0A0A0A",
        ash: "#1B1B1B",
        "ash-light": "#2d2e2e",
        smoke: "#fcfcf7",
        golden: "#dca955",
      },
    },
  },
  plugins: [nextui()],
};
