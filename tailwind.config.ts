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
        carbon: {
          DEFAULT: "#0A0A0C",
          50: "#2A2A2E",
          100: "#252529",
          200: "#1F1F24",
          300: "#1A1A1E",
          400: "#151519",
          500: "#0A0A0C",
        },
        asphalt: {
          DEFAULT: "#1C1C21",
          50: "#3A3A42",
          100: "#33333B",
          200: "#2B2B33",
          300: "#24242B",
          400: "#202026",
          500: "#1C1C21",
        },
        racing: {
          red: {
            DEFAULT: "#E10600",
            400: "#FF1A14",
            500: "#E10600",
            600: "#C40500",
            700: "#A30400",
          },
        },
        titanium: {
          DEFAULT: "#E8E8EC",
          100: "#FFFFFF",
          200: "#F5F5F7",
          300: "#E8E8EC",
          400: "#B8B8C0",
          500: "#888890",
        },
        circuit: {
          blue: {
            DEFAULT: "#00D4FF",
            400: "#33E0FF",
            500: "#00D4FF",
            600: "#00B8E0",
            700: "#009BC0",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        telemetry: ["var(--font-roboto-mono)", "monospace"],
      },
      fontVariantNumeric: {
        tabular: "tabular-nums",
      },
      letterSpacing: {
        tightest: "-0.05em",
        wider: "0.2em",
        widest: "0.3em",
      },
      backgroundImage: {
        "carbon-fiber":
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 4px), linear-gradient(180deg, #0A0A0C 0%, #151519 100%)",
        "checkered-flag":
          "repeating-conic-gradient(#0A0A0C 0% 25%, #FFFFFF 0% 50%) 0 0 / 24px 24px",
        "checkered-flag-sm":
          "repeating-conic-gradient(#0A0A0C 0% 25%, #FFFFFF 0% 50%) 0 0 / 16px 16px",
        "racing-stripe":
          "linear-gradient(90deg, #E10600 0%, #E10600 33%, transparent 33%, transparent 66%, #E10600 66%, #E10600 100%)",
        "metallic-bevel":
          "linear-gradient(135deg, #FFFFFF 0%, #E8E8EC 15%, #B8B8C0 35%, #888890 50%, #B8B8C0 65%, #E8E8EC 85%, #FFFFFF 100%)",
        "wordmark-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #E8E8EC 30%, #B8B8C0 60%, #888890 100%)",
      },
      clipPath: {
        "chevron-left": "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)",
        "chevron-right": "polygon(0 0, 92% 0, 100% 100%, 8% 100%)",
        "chevron-both": "polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
        "paddock-pass": "polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%)",
        "telemetry-frame":
          "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)",
      },
      keyframes: {
        "throttle-fill": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        "telemetry-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "f1-light-on": {
          "0%": { opacity: "0.2", boxShadow: "0 0 0 rgba(225,6,0,0)" },
          "100%": { opacity: "1", boxShadow: "0 0 30px 6px rgba(225,6,0,0.8)" },
        },
        "scroll-line": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(24px)", opacity: "0" },
        },
        "tilt-in": {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
        },
      },
      animation: {
        "throttle-fill": "throttle-fill 0.35s ease-out forwards",
        "telemetry-blink": "telemetry-blink 1.2s ease-in-out infinite",
        "f1-light-on": "f1-light-on 0.3s ease-out forwards",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
      },
      boxShadow: {
        "glow-red": "0 0 0 1px rgba(225,6,0,0.4), 0 0 20px rgba(225,6,0,0.2)",
        "glow-blue": "0 0 0 1px rgba(0,212,255,0.4), 0 0 20px rgba(0,212,255,0.2)",
        "inner-f1":
          "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
