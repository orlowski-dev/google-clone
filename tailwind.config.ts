import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "var(--roboto)",
      },
      gridTemplateColumns: {
        "search-header-mobile": "40px auto 40px",
        "search-header-desktop": "100px auto 200px",
      },
    },
  },
  plugins: [],
};
export default config;
