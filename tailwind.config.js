/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        LtEnergy:["LT Energy","sans-serif"],
        DarkerGrotesque:["Darker Grotesque","sans-serif"]
      },
    },
  },
  plugins: [],
}

