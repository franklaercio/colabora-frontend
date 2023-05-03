/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#010B40",
        white: "#F2EFEB",
        brown: "#D9A577",
        orange: "#F26241",
        black: "#121414",
        green: "#26A646",
        red: "#F20544",
        yellow: "#F2CE1B",
        title: "#E1E1E6",
      },
      fonts: {
        heading: "Roboto",
        body: "Open sans-serif",
      },
      styles: {
        global: {
          body: {
            bg: "black",
            color: "title",
          },
        },
      },
    },
  },
  plugins: [],
};
