export default function CartOrder({
  name,
  price,
  quantity,
  setProductsInCart,
}) {
  const resetQuantity = () =>
    setProductsInCart((prevProductsInCart) =>
      prevProductsInCart.map((product) =>
        product.name == name ? { ...product, quantity: 0 } : product,
      ),
    );
  return (
    <div className="flex items-center justify-between">
      <div className="my-4 text-sm">
        <p className="mb-2 font-bold text-product-list-with-cart-rose-900">
          {name}
        </p>
        <div className="flex gap-3">
          <p className="font-bold text-product-list-with-cart-red">
            {quantity}x
          </p>
          <p className="text-product-list-with-cart-rose-400">
            @{price.toFixed(2)}
          </p>
          <p className="font-semibold text-product-list-with-cart-rose-500">
            ${(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className="group h-min rounded-full border border-product-list-with-cart-rose-500 hover:border-product-list-with-cart-rose-900"
        onClick={resetQuantity}
      >
        {/* prettier-ignore */}
        <svg className="fill-product-list-with-cart-rose-500 p-0.5 group-hover:fill-product-list-with-cart-rose-900" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" > <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /> </svg>
      </button>
    </div>
  );
}
