export default function Dessert({
  imageUrl,
  name,
  category,
  price,
  setProductsInCart,
  quantity,
}) {
  const addProduct = (productName) =>
    setProductsInCart((prevProductsInCart) =>
      prevProductsInCart.map((product) =>
        product.name == productName
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );

  const removeProduct = (productName) =>
    setProductsInCart((prevProductsInCart) =>
      prevProductsInCart.map((product) =>
        product.name == productName
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );

  return (
    <div>
      <div className="relative mb-8 flex flex-col items-center">
        <img className="w-full rounded-lg" src={imageUrl} alt={name} />
        {quantity == 0 ? (
          <button
            className="absolute -bottom-6 mx-8 h-12 w-1/2 rounded-3xl border-2 border-product-list-with-cart-rose-400 bg-product-list-with-cart-rose-50 hover:border-product-list-with-cart-red hover:text-product-list-with-cart-red md:w-2/3"
            onClick={() => addProduct(name)}
          >
            <div className="flex items-center justify-center gap-2">
              <img
                src="product-list-with-cart/icon-add-to-cart.svg"
                alt="Add to cart icon"
              />
              <p className="ml-2 font-semibold">Add to Cart</p>
            </div>
          </button>
        ) : (
          <div className="absolute -bottom-6 mx-8 flex h-12 w-1/2 items-center justify-between rounded-3xl bg-product-list-with-cart-red px-4 md:w-2/3">
            <button
              onClick={() => removeProduct(name)}
              className="group flex h-6 w-6 items-center justify-center rounded-full border border-white bg-product-list-with-cart-red hover:bg-white"
            >
              {/* prettier-ignore */}
              <svg className="fill-white group-hover:fill-product-list-with-cart-red" xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2"><path d="M0 .375h10v1.25H0V.375Z"/></svg>
            </button>
            <p className="ml-2 font-semibold text-white">{quantity}</p>
            <button
              onClick={() => addProduct(name)}
              className="group flex h-6 w-6 items-center justify-center rounded-full border border-white bg-product-list-with-cart-red hover:bg-white"
            >
              {/* prettier-ignore */}
              <svg className="fill-white group-hover:fill-product-list-with-cart-red" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
            </button>
          </div>
        )}
      </div>
      <p className="text-sm text-product-list-with-cart-rose-500">{category}</p>
      <p className="font-semibold text-product-list-with-cart-rose-900">
        {name}
      </p>
      <p className="font-semibold text-product-list-with-cart-red">
        ${price.toFixed(2)}
      </p>
    </div>
  );
}
