/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c9f31d",
        darkblue: "#10171e",
        neutral: "#666666",
      },
      keyframes: {
        scroll: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 1rem))',
          },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        scrollslow: "scroll 25s linear infinite",
      },
    },
  },
  plugins: [],
};
