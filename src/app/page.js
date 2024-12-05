export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-3 gap-8">
        <a
          className="w-40 border border-blue-200 text-center text-xl hover:border-blue-600 hover:text-blue-600 hover:underline"
          href="/product-list-with-cart"
        >
          <img
            className="h-40 w-40"
            src="/product-list-with-cart/active-states.jpg"
            alt=""
          />
          Product List with Cart
        </a>
        <a
          className="w-40 border border-blue-200 text-center text-xl hover:border-blue-600 hover:text-blue-600 hover:underline"
          href="/mortgage-repayment-calculator"
        >
          <img
            className="h-40 w-40"
            src="/mortgage-repayment-calculator/active-states.jpg"
            alt=""
          />
          Mortgage Repayment Calculator
        </a>
        <a
          className="w-40 border border-blue-200 text-center text-xl hover:border-blue-600 hover:text-blue-600 hover:underline"
          href="/url-shortener"
        >
          <img
            className="h-40 w-40"
            src="/url-shortener/desktop-active-states.jpg"
            alt=""
          />
          URL Shortener
        </a>
        <a
          className="w-40 border border-blue-200 text-center text-xl hover:border-blue-600 hover:text-blue-600 hover:underline"
          href="/job-listings"
        >
          <img
            className="h-40 w-40"
            src="/job-listings/active-states.jpg"
            alt=""
          />
          URL Shortener
        </a>
      </div>
    </div>
  );
}
