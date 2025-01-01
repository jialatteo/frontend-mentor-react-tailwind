"use client";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 text-black">
      <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 2xl:grid-cols-3">
        <Card
          title="Interactive Comments Section"
          techStack={["tailwind", "react", "sqlite", "node", "express"]}
          projectUrl="/interactive-comments-section"
          githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/interactive-comments-section"
          images={[
            {
              url: "interactive-comments-section/desktop-design.jpg",
              label: "Design (Desktop)",
              isPortrait: false,
            },
            {
              url: "interactive-comments-section/mobile-design.jpg",
              label: "Design (Mobile)",
              isPortrait: true,
            },
            {
              url: "interactive-comments-section/desktop-modal.jpg",
              label: "Modal (Desktop)",
              isPortrait: false,
            },
            {
              url: "interactive-comments-section/mobile-modal.jpg",
              label: "Modal (Mobile)",
              isPortrait: true,
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
              label: "Step 1 (Desktop)",
              isPortrait: false,
            },
            {
              url: "multi-step-form/mobile-design-step-1.jpg",
              label: "Step 1 (Mobile)",
              isPortrait: true,
            },
            {
              url: "multi-step-form/active-states-step-2.jpg",
              label: "Step 2 (Desktop)",
              isPortrait: false,
            },
            {
              url: "multi-step-form/mobile-design-step-2-monthly.jpg",
              label: "Step 2 (Mobile)",
              isPortrait: true,
            },
            {
              url: "multi-step-form/active-states-step-3.jpg",
              label: "Step 3 (Desktop)",
              isPortrait: false,
            },
            {
              url: "multi-step-form/mobile-design-step-3-monthly.jpg",
              label: "Step 3 (Mobile)",
              isPortrait: true,
            },
            {
              url: "multi-step-form/active-states-step-4.jpg",
              label: "Step 4 (Desktop)",
              isPortrait: false,
            },
            {
              url: "multi-step-form/mobile-design-step-4-monthly.jpg",
              label: "Step 4 (Mobile)",
              isPortrait: true,
            },
            {
              url: "multi-step-form/desktop-design-step-5.jpg",
              label: "Step 5 (Desktop)",
              isPortrait: false,
            },
            {
              url: "multi-step-form/mobile-design-step-5.jpg",
              label: "Step 5 (Mobile)",
              isPortrait: true,
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
              label: "Filled Cart (Desktop",
              isPortrait: false,
            },
            {
              url: "product-list-with-cart/mobile-design-selected.jpg",
              label: "Filled Cart (Mobile)",
              isPortrait: true,
            },
            {
              url: "product-list-with-cart/desktop-design-empty.jpg",
              label: "Empty Cart (Desktop)",
              isPortrait: false,
            },
            {
              url: "product-list-with-cart/mobile-design-empty.jpg",
              label: "Empty Cart (Mobile)",
              isPortrait: true,
            },
            {
              url: "product-list-with-cart/desktop-design-order-confirmation.jpg",
              label: "Confirmed Order (Desktop)",
              isPortrait: false,
            },
            {
              url: "product-list-with-cart/mobile-design-order-confirmation.jpg",
              label: "Confirmed Order (Mobile)",
              isPortrait: true,
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
              isPortrait: true,
            },
            {
              url: "url-shortener/mobile-design.jpg",
              label: "Design (Mobile)",
              isPortrait: true,
            },
            {
              url: "url-shortener/desktop-active-states.jpg",
              label: "Active States (Desktop)",
              isPortrait: true,
            },
            {
              url: "url-shortener/mobile-active-states.jpg",
              label: "Active States (Mobile)",
              isPortrait: true,
            },
            {
              url: "url-shortener/mobile-navigation.jpg",
              label: "Dropdown (Mobile)",
              isPortrait: true,
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
              url: "ecommerce-product-page/active-states-basket-filled.jpg",
              label: "Design (Desktop)",
              isPortrait: false,
            },
            {
              url: "ecommerce-product-page/mobile-design-basket-filled.jpg",
              label: "Design (Mobile)",
              isPortrait: true,
            },
            {
              url: "ecommerce-product-page/mobile-menu.jpg",
              label: "Dropdown (Mobile)",
              isPortrait: true,
            },
            {
              url: "ecommerce-product-page/active-states-lightbox.jpg",
              label: "Lightbox",
              isPortrait: false,
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
              label: "Design Theme 1",
              isPortrait: true,
            },
            {
              url: "calculator-app/mobile-design-theme-2.jpg",
              label: "Design Theme 2",
              isPortrait: true,
            },
            {
              url: "calculator-app/mobile-design-theme-3.jpg",
              label: "Design Theme 3",
              isPortrait: true,
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
              isPortrait: false,
            },
            {
              url: "mortgage-repayment-calculator/error-states.jpg",
              label: "Error States",
              isPortrait: false,
            },
            {
              url: "mortgage-repayment-calculator/hover-states.jpg",
              label: "Hover States",
              isPortrait: false,
            },
            {
              url: "mortgage-repayment-calculator/desktop-design-completed.jpg",
              label: "Completed Result (Desktop)",
              isPortrait: false,
            },
            {
              url: "mortgage-repayment-calculator/mobile-design-completed.jpg",
              label: "Completed Result (Mobile)",
              isPortrait: true,
            },
            {
              url: "mortgage-repayment-calculator/desktop-design-empty.jpg",
              label: "Empty Result (Desktop)",
              isPortrait: false,
            },
            {
              url: "mortgage-repayment-calculator/mobile-design-empty.jpg",
              label: "Empty Result (Mobile)",
              isPortrait: true,
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
              isPortrait: true,
            },
            {
              url: "job-listings/mobile-design.jpg",
              label: "Design (Mobile)",
              isPortrait: true,
            },
          ]}
        />
        <Card
          title="Launch Countdown Timer"
          techStack={["tailwind", "react"]}
          projectUrl="/launch-countdown-timer"
          githubUrl="https://github.com/jialatteo/frontend-mentor-react-tailwind/tree/main/src/app/launch-countdown-timer"
          images={[
            {
              url: "launch-countdown-timer/active-states.jpg",
              label: "Design (Desktop)",
              isPortrait: false,
            },
            {
              url: "launch-countdown-timer/mobile-design.jpg",
              label: "Design (Mobile)",
              isPortrait: true,
            },
          ]}
        />
      </div>
    </div>
  );
}
