import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#09b36e",
          hover: "#08a164",
        },
        text: {
          DEFAULT: "#1A1A1A",
          muted: "#4A5568",
        },
        background: {
          light: "#F8F9FA",
          DEFAULT: "#ffffff",
        },
        border: "#E9ECEF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "light-sweep": {
          "0%": { 
            transform: "translateX(-100%)",
          },
          "100%": { 
            transform: "translateX(300%)",
          }
        },
        "light-pulse": {
          "0%, 100%": { 
            transform: "translateX(-100%) skew-x-12",
            opacity: "0"
          },
          "50%": { 
            transform: "translateX(300%) skew-x-12",
            opacity: "0.7"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "light-sweep": "light-sweep 3s ease-in-out infinite",
        "light-pulse": "light-pulse 3s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;