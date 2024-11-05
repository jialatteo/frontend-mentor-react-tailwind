import data from "./data.json";

function Dessert({ imageUrl, name, category, price }) {
  return (
    <div>
      <div className="relative mb-8 flex flex-col items-center">
        <img className="w-full rounded-lg" src={imageUrl} alt={name} />
        <button className="absolute -bottom-6 mx-8 h-12 w-2/3 rounded-3xl border-2 border-product-list-with-cart-rose-400 bg-product-list-with-cart-rose-50 hover:border-product-list-with-cart-red hover:text-product-list-with-cart-red">
          <div className="flex items-center justify-center gap-2">
            <img
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
              src="product-list-with-cart/icon-add-to-cart.svg"
              alt="Add to cart icon"
            />
            <p className="ml-2 text-xs font-semibold sm:text-sm">Add to Cart</p>
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

function Order() {
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

export default function ProductListWithCart() {
  return (
    <div className="min-h-screen bg-product-list-with-cart-rose-50 px-28 py-20 font-redHatText text-base text-product-list-with-cart-rose-900">
      <div className="block md:flex">
        <div>
          <h1 className="mb-8 text-4xl font-bold">Desserts</h1>
          <div className="grid max-w-3xl grid-cols-1 gap-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((dessert) => (
              <Dessert
                imageUrl={dessert.image.desktop}
                name={dessert.name}
                category={dessert.category}
                price={dessert.price}
                key={dessert.name}
              />
            ))}
          </div>
        </div>
        <div className="ml-10 h-min flex-none rounded-xl bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-product-list-with-cart-red">
            Your Cart (1)
          </h2>
          <div className="divide-y-2">
            <Order />
            <Order />
            <Order />
            <div className="flex items-center justify-between pt-6">
              <p className="text-sm text-product-list-with-cart-rose-500">
                Order Total:
              </p>
              <p className="text-2xl font-bold">$46.20</p>
            </div>
          </div>
          <div className="my-6 flex items-center justify-center gap-2 bg-product-list-with-cart-rose-50 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                fill="#1EA575"
                d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
              />
              <path
                fill="#1EA575"
                d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
              />
            </svg>
            <p className="text-sm">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button className="w-full rounded-3xl bg-product-list-with-cart-red py-3 font-semibold text-white hover:bg-red-800">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
