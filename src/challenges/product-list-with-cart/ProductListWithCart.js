function Dessert({ imageUrl, name, category, price }) {
  return (
    <div>
      <div className="relative mb-8 flex flex-col items-center">
        <img className="w-full rounded-lg" src={imageUrl} alt={name} />
        <button className="hover:text-product-list-with-cart-red border-product-list-with-cart-rose-400 bg-product-list-with-cart-rose-50 hover:border-product-list-with-cart-red absolute -bottom-6 mx-8 h-12 w-2/3 rounded-3xl border-2">
          <div className="flex justify-center gap-2">
            <img src="icon-add-to-cart.svg" alt="Add to cart icon" />
            <p className="font-semibold">Add to Cart</p>
          </div>
        </button>
      </div>
      <p className="text-product-list-with-cart-rose-500 text-sm">{category}</p>
      <p className="text-product-list-with-cart-rose-900 font-semibold">
        {name}
      </p>
      <p className="text-product-list-with-cart-red font-semibold">
        ${price.toFixed(2)}
      </p>
    </div>
  );
}

function Order() {
  return (
    <div className="flex items-center justify-between gap-40">
      <div className="my-4 text-sm">
        <p className="text-product-list-with-cart-rose-900 mb-2 font-bold">
          Classic Tiramisu
        </p>
        <div className="flex gap-3">
          <p className="text-product-list-with-cart-red font-bold">1x</p>
          <p className="text-product-list-with-cart-rose-400">@$5.50</p>
          <p className="text-product-list-with-cart-rose-500 font-semibold">
            $5.50
          </p>
        </div>
      </div>
      <button className="border-product-list-with-cart-rose-500 hover:border-product-list-with-cart-rose-900 h-min rounded-full border">
        <svg
          className="text-product-list-with-cart-rose-500 hover:text-product-list-with-cart-rose-900 fill-current p-0.5"
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
    <div className="bg-product-list-with-cart-rose-50 font-redHatText text-product-list-with-cart-rose-900 min-h-screen px-28 py-20 text-base">
      <div className="flex">
        <div>
          <h1 className="mb-8 text-4xl font-bold">Desserts</h1>
          <div className="grid max-w-3xl grid-cols-1 gap-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
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
          <h2 className="text-product-list-with-cart-red mb-4 text-2xl font-bold">
            Your Cart (1)
          </h2>
          <div className="divide-y-2">
            <Order />
            <Order />
            <Order />
            <div className="flex items-center justify-between pt-6">
              <p className="text-product-list-with-cart-rose-500 text-sm">
                Order Total:
              </p>
              <p className="text-2xl font-bold">$46.20</p>
            </div>
          </div>
          <div className="bg-product-list-with-cart-rose-50 my-6 flex items-center justify-center gap-2 py-4">
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
          <button className="bg-product-list-with-cart-red w-full rounded-3xl py-3 font-semibold text-white hover:bg-red-800">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
