"use client";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 text-black">
      <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 2xl:grid-cols-3">
        <Card
          title="Launch Countdown Timer"
          techStack={["tailwind", "react"]}
          projectUrl="/launch-countdown-timer"
          githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/launch-countdown-timer"
          images={[
            {
              url: "launch-countdown-timer/active-states.jpg",
              label: "Active States",
            },
            {
              url: "launch-countdown-timer/desktop-design.jpg",
              label: "Design (Desktop)",
            },
            {
              url: "launch-countdown-timer/mobile-design.jpg",
              label: "Design (Mobile)",
            },
          ]}
        />
        <Card
          title="Ecommerce Product Page"
          techStack={["tailwind", "react"]}
          projectUrl="/ecommerce-product-page"
          githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/ecommerce-product-page"
          images={[
            {
              url: "ecommerce-product-page/active-states-basket-empty.jpg",
              label: "Design (Desktop)",
            },
            {
              url: "ecommerce-product-page/active-states-basket-filled.jpg",
              label: "Design (Desktop)",
            },
            {
              url: "ecommerce-product-page/active-states-lightbox.jpg",
              label: "Design (Desktop)",
            },
            {
              url: "ecommerce-product-page/desktop-design.jpg",
              label: "Design (Desktop)",
            },
            {
              url: "ecommerce-product-page/desktop-design-lightbox.jpg",
              label: "Lightbox (Desktop)",
            },
            {
              url: "ecommerce-product-page/mobile-design.jpg",
              label: "Design (Mobile)",
            },
            {
              url: "ecommerce-product-page/mobile-design-basket-empty.jpg",
              label: "Design (Mobile)",
            },
            {
              url: "ecommerce-product-page/mobile-design-basket-filled.jpg",
              label: "Design (Mobile)",
            },
          ]}
        />
        <Card
          title="Interactive Comments Section"
          techStack={["tailwind", "react", "sqlite", "node", "express"]}
          projectUrl="/interactive-comments-section"
          githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/interactive-comments-section"
          images={[
            {
              url: "interactive-comments-section/active-states.jpg",
              label: "Active States",
            },
            {
              url: "interactive-comments-section/desktop-design.jpg",
              label: "Design (Desktop)",
            },
            {
              url: "interactive-comments-section/mobile-design.jpg",
              label: "Design (Mobile)",
            },
            {
              url: "interactive-comments-section/mobile-modal.jpg",
              label: "Modal (Mobile)",
            },

            {
              url: "interactive-comments-section/desktop-modal.jpg",
              label: "Modal (Desktop)",
            },
          ]}
        />
        <Card
          title="Multi Step Form"
          techStack={["tailwind", "react", "reactHookForm"]}
          projectUrl="/multi-step-form"
          githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/multi-step-form"
          images={[
            {
              url: "multi-step-form/active-states-step-1.jpg",
              label: "Active State Step 1 (Desktop)",
            },
          ]}
        />
        <Card
          title="Calculator App"
          techStack={["tailwind", "react"]}
          projectUrl="/calculator-app"
          githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/calculator-app"
          images={[
            {
              url: "calculator-app/mobile-design-theme-1.jpg",
              label: "Design Theme 1 (Desktop)",
            },
          ]}
        />
        <Card
          title="URL Shortener"
          techStack={["tailwind", "react", "reactHookForm", "node", "express"]}
          projectUrl="/url-shortener"
          githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/url-shortener"
          images={[
            {
              url: "url-shortener/desktop-design.jpg",
              label: "Design (Desktop)",
            },
            {
              url: "url-shortener/mobile-design.jpg",
              label: "Design (Mobile)",
            },
            {
              url: "url-shortener/desktop-active-states.jpg",
              label: "Active States (Desktop)",
            },
            {
              url: "url-shortener/mobile-active-states.jpg",
              label: "Active States (Mobile)",
            },
            {
              url: "url-shortener/mobile-navigation.jpg",
              label: "Navigation (Mobile)",
            },
          ]}
        />
        <Card
          title="Mortgage Repayment Calculator"
          techStack={["tailwind", "react", "reactHookForm"]}
          projectUrl="/mortgage-repayment-calculator"
          githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/mortgage-repayment-calculator"
          images={[
            {
              url: "mortgage-repayment-calculator/active-states.jpg",
              label: "Active States",
            },
            {
              url: "mortgage-repayment-calculator/error-states.jpg",
              label: "Error States",
            },
            {
              url: "mortgage-repayment-calculator/hover-states.jpg",
              label: "Hover States",
            },
            {
              url: "mortgage-repayment-calculator/desktop-design-completed.jpg",
              label: "Empty Cart (Desktop)",
            },
            {
              url: "mortgage-repayment-calculator/mobile-design-completed.jpg",
              label: "Empty Cart (Mobile)",
            },
            {
              url: "mortgage-repayment-calculator/desktop-design-empty.jpg",
              label: "Confirmed Order (Desktop)",
            },
            {
              url: "mortgage-repayment-calculator/mobile-design-empty.jpg",
              label: "Confirmed Order (Mobile)",
            },
          ]}
        />
        <Card
          title="Job Listings"
          techStack={["tailwind", "react"]}
          projectUrl="/job-listings"
          githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/job-listings"
          images={[
            {
              url: "job-listings/desktop-design.jpg",
              label: "Design (Desktop)",
            },
            {
              url: "job-listings/mobile-design.jpg",
              label: "Design (Mobile)",
            },
          ]}
        />
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
      </div>
    </div>
  );
}
