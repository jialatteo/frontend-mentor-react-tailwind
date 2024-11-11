import { useState } from "react";
import data from "./data.json";
import Dessert from "./Dessert";
import Order from "./Order";

export default function ProductListWithCart() {
  const [productsInCart, setProductsInCart] = useState(
    data.map((dessert) => ({
      name: dessert.name,
      quantity: 0,
    })),
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-product-list-with-cart-rose-50 px-6 py-20 font-redHatText text-base text-product-list-with-cart-rose-900">
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
                setProductsInCart={setProductsInCart}
              />
            ))}
          </div>
        </div>
        <div className="mt-6 h-min flex-none rounded-xl bg-white p-6 md:ml-10 md:mt-0">
          <h2 className="mb-4 text-2xl font-bold text-product-list-with-cart-red">
            Your Cart (1)
          </h2>
          <div className="divide-y-2">
            {productsInCart.reduce((acc, dessert) => {
              acc += dessert.quantity;
              return acc;
            }, 0) == 0 ? (
              <div className="flex flex-col items-center justify-center">
                <img src="product-list-with-cart/illustration-empty-cart.svg" />
                <p className="mt-2 text-sm font-semibold text-product-list-with-cart-rose-500">
                  Your added items will appear here
                </p>
              </div>
            ) : (
              <div>
                {productsInCart
                  .filter((product) => product.quantity != 0)
                  .map((product) => (
                    <Order
                      name={product.name}
                      quantity={product.quantity}
                      price={
                        data.find((dessert) => dessert.name == product.name)
                          ?.price
                      }
                    />
                  ))}
              </div>
            )}
            <div className="flex items-center justify-between pt-6">
              <p className="text-sm text-product-list-with-cart-rose-500">
                Order Total:
              </p>
              <p className="text-2xl font-bold">
                {productsInCart
                  .reduce(
                    (acc, product) =>
                      acc +
                      product.quantity *
                        data.find((dessert) => dessert.name == product.name)
                          ?.price,
                    0,
                  )
                  .toFixed(2)}
              </p>
            </div>
          </div>
          <div className="my-6 flex items-center justify-center gap-2 bg-product-list-with-cart-rose-50 py-4">
            <img src="product-list-with-cart/icon-carbon-neutral.svg" />
            <p className="text-sm">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button className="w-full rounded-3xl bg-product-list-with-cart-red py-3 text-sm font-semibold text-white hover:bg-red-800">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
