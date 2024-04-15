// @app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactLinkProps = {
    href: "mailto:contact@idempire.us",
    className: "text-gray-300 hover:underline",
  };

  return (
    <footer className="bg-background text-gray-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">ID</span>
            <span className="gradient-text">Empire</span>
          </h1>
        </Link>
        <p className="text-center text-gray-300">
          Contact us: <a {...contactLinkProps}>contact@idempire.us</a>
        </p>
        <p className="mt-4 text-center text-gray-300">
          &copy; {currentYear} IDEmpire. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
