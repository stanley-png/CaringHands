import React from "react";

const HeroSection = () => {
  return (
    <main
      id="home"
      className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-24 h-[60vh]"
    >
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight ">
            Donate to a starving child with
            <span className="text-green-600">Caring Hands</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 ">
            Over 95% of all the donations go directly to projects.
          </p>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-green-600 hover:bg-green-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
              href="#"
            >
              Donate
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
              href="#"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="relative ml-4">
          <img
            className="w-full rounded-md md:min-h-[400px]"
            src="https://www.tearfund.org/-/media/tearfund/images/get-involved/donate/donatepage-smilingchild-overview.jpg?mw=1200"
            alt="Image Description"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
