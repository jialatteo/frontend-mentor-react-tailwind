export default function Order() {
  return (
    <div className="flex items-center justify-between">
      <div className="my-4 text-sm">
        <p className="mb-2 font-bold text-product-list-with-cart-rose-900">
          Classic Tiramisu
        </p>
        <div className="flex gap-3">
          <p className="font-bold text-product-list-with-cart-red">1x</p>
          <p className="text-product-list-with-cart-rose-400">@$5.50</p>
          <p className="font-semibold text-product-list-with-cart-rose-500">
            $5.50
          </p>
        </div>
      </div>
      <button className="h-min rounded-full border border-product-list-with-cart-rose-500 hover:border-product-list-with-cart-rose-900">
        <svg
          className="fill-current p-0.5 text-product-list-with-cart-rose-500 hover:text-product-list-with-cart-rose-900"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
        >
          <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
        </svg>
      </button>
    </div>
  );
}
