export default function ConfirmedOrder({ name, price, quantity, imageUrl }) {
  return (
    <div className="flex items-center justify-center px-2 py-4">
      <img className="mr-2 h-12 rounded-md" src={imageUrl} alt="" />
      <div className="text-sm">
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
        </div>
      </div>
      <p className="ml-auto text-sm font-bold text-product-list-with-cart-rose-900">
        ${(price * quantity).toFixed(2)}
      </p>
    </div>
  );
}
