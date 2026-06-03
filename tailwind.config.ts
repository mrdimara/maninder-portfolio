import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        border: "var(--border)",
        "border-h": "var(--border-h)",
        amber: "var(--amber)",
        "amber-dim": "var(--amber-dim)",
        blue: "var(--blue)",
        green: "var(--green)",
        purple: "var(--purple)",
        red: "var(--red)",
        text: "var(--text)",
        muted: "var(--muted)",
        "muted-l": "var(--muted-l)",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "monospace"],
      },
      borderRadius: {
        card: "3px",
        btn: "2px",
        tag: "2px",
      },
      maxWidth: {
        content: "960px",
      },
    },
  },
  plugins: [],
};
export default config;
