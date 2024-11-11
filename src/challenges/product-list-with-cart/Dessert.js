export default function Dessert({
  imageUrl,
  name,
  category,
  price,
  setProductsInCart,
}) {
  return (
    <div>
      <div className="relative mb-8 flex flex-col items-center">
        <img className="w-full rounded-lg" src={imageUrl} alt={name} />
        <button
          className="absolute -bottom-6 mx-8 h-12 w-1/2 rounded-3xl border-2 border-product-list-with-cart-rose-400 bg-product-list-with-cart-rose-50 hover:border-product-list-with-cart-red hover:text-product-list-with-cart-red md:w-2/3"
          onClick={() =>
            setProductsInCart((prevProductsInCart) =>
              prevProductsInCart.map((product) =>
                product.name == name
                  ? { ...product, quantity: product.quantity + 1 }
                  : product,
              ),
            )
          }
        >
          <div className="flex items-center justify-center gap-2">
            <img
              src="product-list-with-cart/icon-add-to-cart.svg"
              alt="Add to cart icon"
            />
            <p className="ml-2 font-semibold">Add to Cart</p>
          </div>
        </button>
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
