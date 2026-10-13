import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        emerald: { 50: "#eef8f8", 100: "#dceff0", 200: "#b9e0e2", 300: "#91d1d4", 400: "#6bc4c8", 500: "#50b8be", 600: "#3998a0", 700: "#32747d", 800: "#315861", 900: "#2e464f", 950: "#1d303a" },
        teal: { 50: "#eef8f8", 100: "#dceff0", 200: "#b9e0e2", 300: "#91d1d4", 400: "#6bc4c8", 500: "#50b8be", 600: "#3998a0", 700: "#32747d", 800: "#315861", 900: "#2e464f", 950: "#1d303a" },
        cyan: { 50: "#eef8f8", 100: "#dceff0", 200: "#b9e0e2", 300: "#91d1d4", 400: "#6bc4c8", 500: "#50b8be", 600: "#3998a0", 700: "#32747d", 800: "#315861", 900: "#2e464f", 950: "#1d303a" },
        amber: { 50: "#fff8eb", 100: "#ffedc8", 200: "#ffdc91", 300: "#ffc75a", 400: "#ffb22d", 500: "#f49a1e", 600: "#d67b0e", 700: "#aa5b10", 800: "#884816", 900: "#703d17", 950: "#41200a" },
        orange: { 50: "#fff8eb", 100: "#ffedc8", 200: "#ffdc91", 300: "#ffc75a", 400: "#ffb22d", 500: "#f49a1e", 600: "#d67b0e", 700: "#aa5b10", 800: "#884816", 900: "#703d17", 950: "#41200a" },
        lime: { 50: "#eef8f8", 100: "#dceff0", 200: "#b9e0e2", 300: "#91d1d4", 400: "#6bc4c8", 500: "#50b8be", 600: "#3998a0", 700: "#32747d", 800: "#315861", 900: "#2e464f", 950: "#1d303a" },
        blue: { 50: "#eef8f8", 100: "#dceff0", 200: "#b9e0e2", 300: "#91d1d4", 400: "#6bc4c8", 500: "#50b8be", 600: "#3998a0", 700: "#32747d", 800: "#315861", 900: "#2e464f", 950: "#1d303a" },
        purple: { 50: "#eef8f8", 100: "#dceff0", 200: "#b9e0e2", 300: "#91d1d4", 400: "#6bc4c8", 500: "#50b8be", 600: "#3998a0", 700: "#32747d", 800: "#315861", 900: "#2e464f", 950: "#1d303a" },
        rose: { 50: "#eef8f8", 100: "#dceff0", 200: "#b9e0e2", 300: "#91d1d4", 400: "#6bc4c8", 500: "#50b8be", 600: "#3998a0", 700: "#32747d", 800: "#315861", 900: "#2e464f", 950: "#1d303a" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
