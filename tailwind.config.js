/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#4caf2a",
        "green-dark":    "#2d7a10",
        "green-light":   "#8dc63f",
        "green-muted":   "#e8f5e1",
        charcoal:        "#1a1a1a",
        "warm-white":    "#f9fbf7",
        "accent-gold":   "#f0b429",
        "text-body":     "#3d4a35",
        "border-subtle": "#d4e8c2",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "green-glow": "0 0 30px rgba(76, 175, 42, 0.25)",
        card:         "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 16px 48px rgba(76,175,42,0.18)",
      },
      keyframes: {
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-6px)" },
        },
      },
      animation: {
        floatY: "floatY 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
