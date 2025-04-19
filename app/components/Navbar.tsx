"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinkClass = (path: string) =>
    `hover:text-primary ${
      pathname === path ? "text-primary font-semibold" : ""
    }`;

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="navbar-center container mx-auto">
        {/* Mobile Menu */}
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/" className={navLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={navLinkClass("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/passions" className={navLinkClass("/passions")}>
                  Passions
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={navLinkClass("/portfolio")}>
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="navbar-start lg:navbar-start">
          <Link href="/" className="btn btn-ghost text-xl font-bold">
            No Title
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
            <li>
              <Link href="/" className={navLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={navLinkClass("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link href="/passions" className={navLinkClass("/passions")}>
                Passions
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={navLinkClass("/portfolio")}>
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
            <li>
              <a href="/contact" className="btn btn-primary rounded-full px-6">
                Contact Me!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
