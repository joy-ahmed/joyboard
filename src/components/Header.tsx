import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-500" href="/">
          <span className="sr-only">Home</span>
          <svg
            className="w-12 h-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block bg-teal-600 py-2.5 px-5 text-sm font-medium text-white rounded-md hover:bg-teal-700 transition"
                href="/login"
              >
                Login
              </a>
              <a
                className="hidden bg-gray-100 py-2.5 px-5 text-sm font-medium text-teal-600 rounded-md hover:text-teal-600/75 transition sm:block"
                href="/register"
              >
                Register
              </a>
            </div>
            <button className="rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
