"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinkClass = (path: string) =>
    `px-4 py-2 rounded-lg transition-colors ${
      pathname === path
        ? "text-primary font-medium bg-primary/10"
        : "hover:text-primary hover:bg-base-200"
    }`;

  return (
    <nav className="bg-base-100 border-b border-base-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button (Left on mobile) */}
          <div className="lg:hidden">
            <details className="dropdown">
              <summary className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              </summary>
              <ul className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
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
                  <Link
                    href="/portfolio"
                    className={navLinkClass("/portfolio")}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={navLinkClass("/contact")}>
                    Contact
                  </Link>
                </li>
              </ul>
            </details>
          </div>

          {/* Professional JL Logo (Right on mobile, Left on desktop) */}
          <Link href="/" className="flex items-center lg:ml-0 ml-auto lg:mr-0">
            <div className="flex items-center gap-2">
              {/* Modern Logo Design */}
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary font-bold text-xl tracking-tighter">
                  JL
                </div>
              </div>
              <span className="hidden lg:inline-block text-lg font-semibold text-base-content ml-2">
                Jim Laroco
              </span>
            </div>
          </Link>
          {/* Desktop Navigation (Center) */}
          <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
            <Link href="/passions" className={navLinkClass("/passions")}>
              Passions
            </Link>
            <Link href="/portfolio" className={navLinkClass("/portfolio")}>
              Portfolio
            </Link>
          </div>

          {/* Desktop CTA (Right) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-br from-primary to-secondary text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
