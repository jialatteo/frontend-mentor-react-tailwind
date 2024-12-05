import "./globals.css";

export const metadata = {
  title: "Frontend Mentor Challenges",
  description: "Frontend Mentor Challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
