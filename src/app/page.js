export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <ul className="flex flex-col gap-8">
        <li className="bg-slate-200">
          <a href="/product-list-with-cart">Product List with Cart</a>
        </li>
        <li className="bg-slate-200">
          <a href="/mortgage-repayment-calculator">
            Mortgage Repayment Calculator
          </a>
        </li>
        <li className="bg-slate-200">
          <a href="/url-shortener">URL Shortener</a>
        </li>
      </ul>
    </div>
  );
}
