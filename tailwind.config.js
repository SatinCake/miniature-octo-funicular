module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_900: "#26272f",
        gray_600_5e: "#7069695e",
        blue_900: "#0c469d",
        gray_500: "#aeabab",
        pink_900: "#8c083f",
        bluegray_100: "#d9d9d9",
        deep_purple_A200: "#9747ff",
        white_A700: "#ffffff",
        pink_400: "#d23e7c",
        bluegray_901: "#2a2b35",
      },
      fontFamily: { inter: "Inter" },
      borderRadius: {
        radius5: "5px",
        radius6: "6px",
        radius8: "8px",
        radius18: "18px",
        radius50: "50%",
      },
      borderWidth: { bw5: "5px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
