import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";

const Header = () => {
  const navigate = useNavigate();
  return (
    <main className="">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 ">
        <nav
          className="relative max-w-7xl w-full mx-auto sm:flex sm:items-center sm:justify-between md:px-3 px-3"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <p className="flex-none text-xl font-bold cursor-pointer text-green-600">
              CaringHands
            </p>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm "
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="font-medium text-green-600 sm:py-6 cursor-pointer"
                aria-current="page"
              >
                Home
              </Link>
              <a
                className="font-medium text-gray-500 hover:text-green-600 sm:py-6 "
                href="about"
              >
                About Us
              </a>
              <Link
                to="contacts"
                smooth={true}
                duration={500}
                className="font-medium text-gray-500 hover:text-green-600 sm:py-6 cursor-pointer"
              >
                Contact Us
              </Link>
              <a
                className="font-medium text-gray-500 hover:text-green-600 sm:py-6 "
                href="#"
              >
                Blog
              </a>
              <Link
                to="gallery"
                smooth={true}
                duration={500}
                className="font-medium text-gray-500 hover:text-green-600 sm:py-6 cursor-pointer"
              >
                Gallery
              </Link>
              <button
                onClick={() => navigate("/login")}
                className="bg-green-600 border border-green-600 hover:bg-transparent rounded-full py-2 px-8 text-white hover:text-green-600 font-semibold"
              >
                Donate
              </button>
            </div>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Header;
