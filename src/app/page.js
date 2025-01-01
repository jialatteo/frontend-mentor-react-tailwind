"use client";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center text-black">
      <Card
        title="Product List with Cart"
        techStack={["tailwind", "react"]}
        projectUrl="/product-list-with-cart"
        githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/product-list-with-cart"
        images={[
          {
            url: "product-list-with-cart/active-states.jpg",
            label: "Active States",
          },
          {
            url: "product-list-with-cart/desktop-design-empty.jpg",
            label: "Empty Cart (Desktop)",
          },
          {
            url: "product-list-with-cart/mobile-design-empty.jpg",
            label: "Empty Cart (Mobile)",
          },
          {
            url: "product-list-with-cart/desktop-design-order-confirmation.jpg",
            label: "Confirmed Order (Desktop)",
          },
          {
            url: "product-list-with-cart/mobile-design-order-confirmation.jpg",
            label: "Confirmed Order (Mobile)",
          },
          {
            url: "product-list-with-cart/desktop-design-selected.jpg",
            label: "Selected (Desktop)",
          },
          {
            url: "product-list-with-cart/mobile-design-selected.jpg",
            label: "Selected (Mobile)",
          },
        ]}
      />
      <div className="grid grid-cols-3 gap-8">
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/mortgage-repayment-calculator"
        >
          <img
            className="h-40 w-40"
            src="/mortgage-repayment-calculator/active-states.jpg"
            alt="mortgage-repayment-calculator"
          />
          Mortgage Repayment Calculator
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/url-shortener"
        >
          <img
            className="h-40 w-40"
            src="/url-shortener/desktop-active-states.jpg"
            alt="url-shortener"
          />
          URL Shortener
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/job-listings"
        >
          <img
            className="h-40 w-40"
            src="/job-listings/active-states.jpg"
            alt="job-listings"
          />
          Job Listings
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/ecommerce-product-page"
        >
          <img
            className="h-40 w-40"
            src="/ecommerce-product-page/active-states-basket-filled.jpg"
            alt="ecommerce-product-page"
          />
          Ecommerce Product Page
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/interactive-comments-section"
        >
          <img
            className="h-40 w-40"
            src="/interactive-comments-section/active-states.jpg"
            alt="interactive-comments-section"
          />
          Interactive Comments Section
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/multi-step-form"
        >
          <img
            className="h-40 w-40"
            src="/multi-step-form/active-states-step-1.jpg"
            alt="multi-step-form"
          />
          Multi Step Form
        </a>
        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/calculator-app"
        >
          <img
            className="h-40 w-40"
            src="/calculator-app/active-states-theme-1.jpg"
            alt="calculator-app"
          />
          Calculator App
        </a>

        <a
          className="w-40 rounded-xl p-4 text-center text-xl shadow hover:bg-blue-600 hover:text-blue-600 hover:underline"
          href="/launch-countdown-timer"
        >
          <img
            className="h-40 w-40"
            src="/launch-countdown-timer/active-states.jpg"
            alt="launch-countdown-timer"
          />
          Launch Countdown Timer
        </a>
      </div>
    </div>
  );
}
