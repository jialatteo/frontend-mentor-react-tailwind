/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "social-links-profile-grey-700": "hsl(0, 0%, 20%)",
        "social-links-profile-grey-800": "hsl(0, 0%, 12%)",
        "social-links-profile-grey-900": "hsl(0, 0%, 8%)",
        "social-links-profile-green": "hsl(75, 94%, 57%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
