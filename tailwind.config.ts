import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0077",
      },
      backgroundImage: {
        dark: "linear-gradient(102.69deg, #000000 -9.29%, rgba(90, 90, 90, 0.88) 85.51%)",
      },
      fontFamily: {
        poppins: ['"Poppins"', "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
