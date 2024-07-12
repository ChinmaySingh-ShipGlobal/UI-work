/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  blocklist: ["example_class"], //TODO Add restrictions for specific classes
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: { max: "500px" },
        // mobile => below 500px wide
        md: "768px",
        // tablet => (min-width: 768px) (max-width: 1024px)
        lg: "1024px",
        // laptop => (min-width: 1024px) (max-width: 1440px)
        xl: "1440px",
        // FHD screen => (min-width: 1440px) (max-width: 1536px)
        "2xl": "1536px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white:{ DEFAULT:"#ffffff",100:"#F1F1F1"},
      black: "#040404",
      primary: "#1F499F",
      blue: {
        DEFAULT: "#1F499F",
        50: "#EBF0FC",
        100: "#E9EFFF",
        150: "#EEF3FF",
        200: "#DDDDF2",
        300: "#ADC8FF",
        400:"#1F499E",
        700: "#4769AF",
        light:"#f9f8ff"
      },
      orange: {
        DEFAULT: "#F69F00",
        50: "#FFF5EF",
        100: "#FFCE85",
        200: "#FFF7ED",
        700: "#A6730F",
        800: "#D88000",
        dark: "#F59300",
        light: "#FFF8F5",
      },
      red: "#DD1717",
      green: {DEFAULT:"#007A48",100:"#ECFEF3"},
      purple: "#6840C5",
      pink: { DEFAULT: "#FC5353", 100: "#FFF7E9",200:"#FCEEEE" },
      gray: {
        50: "#FAFAFA",
        100: "#F7F8FA",
        150:"#E0E0E0",
        200: "#F4F4F4",
        250: "#FDFDFD",
        300: "#DCDCDC",
        350: "#DBDBDB",
        400: "#C4C4C4",
        450: "#E7E7E7",
        600: "#A0A8B4",
        650: "#686F77",
        700: "#77809C",
        800: "#647082",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        auth: "url('/background.jpg')",
      },
      colors: {
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        15: "3.75rem", // 60px
        18: "4.5rem", // 72px - 1 rem = 4 tailwind units = 16 px
        22: "5.5rem", // 88px
        68: "17rem", // 272px
        76: "19rem", // 304px
        88: "22rem", // 352px
        100: "25rem", // 400px
        104: "26rem", // 416px
        112: "28rem", // 448px
        120: "30rem", // 480px
        128: "32rem", // 512px
        136: "34rem", // 544px
        144: "36rem", // 578px
        160: "40rem", // 640px
        176: "44rem", // 704px
        192: "48rem", // 768px
        200: "50rem", // 800px
        208: "52rem", // 832px
        240: "60rem", // 960px
        272: "68rem", // 1088px
        300: "75rem", // 1200px
        304: "76rem", // 1216px
        336: "84rem", // 1344px
        368: "92rem", // 1472px
        400: "100rem", // 1600px
        432: "108rem", // 1728px
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
