import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B5FFF",
          dark: "#0A4FDB",
          50: "#EAF1FF",
        },
        secondary: "#5DA8FF",
        accent: "#7B61FF",
        mascot: "#FFD84D",
        bg: "#F7FAFF",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#0B1533",
          soft: "#5E6C8B",
        },
        success: "#16A66A",
        warning: "#F59E0B",
        danger: "#E5484D",
        border: {
          DEFAULT: "#DCE7F8",
        },
        soft: "#EEF5FF",
        tint: "#E5EFFF",
        footer: "#071A3D",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Manrope", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(11, 21, 51, 0.10)",
        cardHover: "0 20px 45px -18px rgba(11, 95, 255, 0.28)",
        button: "0 10px 24px -8px rgba(11, 95, 255, 0.45)",
        glass: "0 8px 32px rgba(11, 21, 51, 0.08)",
        glow: "0 0 60px rgba(255, 216, 77, 0.24)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0B5FFF 0%, #5DA8FF 100%)",
        "gradient-ai": "linear-gradient(135deg, #0B5FFF 0%, #7B61FF 100%)",
        "gradient-radial-soft":
          "radial-gradient(circle at 30% 30%, rgba(93,168,255,0.25), rgba(247,250,255,0) 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1.5deg)" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "96%": { transform: "scaleY(0.1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dashMove: {
          to: { strokeDashoffset: "0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        floatSlow: "floatSlow 7s ease-in-out infinite",
        blink: "blink 4.5s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        spinSlow: "spinSlow 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
