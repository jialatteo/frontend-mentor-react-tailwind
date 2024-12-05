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
        "product-list-with-cart-red": "hsl(14, 86%, 42%)",
        "product-list-with-cart-green": "hsl(159, 69%, 38%)",
        "product-list-with-cart-rose-50": "hsl(20, 50%, 98%)",
        "product-list-with-cart-rose-100": "hsl(13, 31%, 94%)",
        "product-list-with-cart-rose-300": "hsl(14, 25%, 72%)",
        "product-list-with-cart-rose-400": "hsl(7, 20%, 60%)",
        "product-list-with-cart-rose-500": "hsl(12, 20%, 44%)",
        "product-list-with-cart-rose-900": "hsl(14, 65%, 9%)",
        "mortgage-repayment-calculator-slate-100": "hsl(202, 86%, 94%)",
        "mortgage-repayment-calculator-slate-300": "hsl(203, 41%, 72%)",
        "mortgage-repayment-calculator-slate-500": "hsl(200, 26%, 54%)",
        "mortgage-repayment-calculator-slate-700": "hsl(200, 24%, 40%)",
        "mortgage-repayment-calculator-slate-900": "hsl(202, 55%, 16%)",
        "mortgage-repayment-calculator-lime": "hsl(61, 70%, 52%)",
        "mortgage-repayment-calculator-red": "hsl(4, 69%, 50%)",
        "url-shortener-cyan": "hsl(180, 66%, 49%)",
        "url-shortener-dark-violet": "hsl(257, 27%, 26%)",
        "url-shortener-red": "hsl(0, 87%, 67%)",
        "url-shortener-gray": "hsl(0, 0%, 75%)",
        "url-shortener-grayish-violet": "hsl(257, 7%, 63%)",
        "url-shortener-very-dark-blue": "hsl(255, 11%, 22%)",
        "url-shortener-very-dark-violet": "hsl(260, 8%, 14%)",
        "job-listings-light-grayish-cyan-background": "hsl(180, 52%, 96%)",
        "job-listings-light-grayish-cyan-filter-tablets": "hsl(180, 31%, 95%)",
        "job-listings-dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "job-listings-very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
