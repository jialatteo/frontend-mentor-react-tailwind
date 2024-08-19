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

export default function ProductListWithCart() {
  return (
    <div className="bg-product-list-with-cart-rose-100 font-redHatText text-product-list-with-cart-rose-900 min-h-screen p-8 text-base">
      <div className="grid max-w-3xl grid-cols-1 gap-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        {data.map((dessert) => (
          <Dessert
            imageUrl={dessert.image.desktop}
            name={dessert.name}
            category={dessert.category}
            price={dessert.price}
          />
        ))}
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
