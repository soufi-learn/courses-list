/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        "dana-black": "dana-black",
        "dana-bold": "dana-bold",
        "dana-medium": "dana-medium",
        "dana-light": "dana-light",
      },
      boxShadow: {
        "custom-inset": "inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF",
        "custom-inset-hover":
          "inset 1px 1px 2px #BABECC, inset -1px -1px 5px #f7f7f7",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
