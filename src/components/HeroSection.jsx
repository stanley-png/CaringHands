import React from "react";

const HeroSection = () => {
  return (
    <main className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight ">
            Start your journey with{" "}
            <span className="text-green-600">Preline</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 ">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of entrepreneur.
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
              Contact sales team
            </a>
          </div>
        </div>

        <div className="relative ml-4">
          <img
            className="w-full rounded-md"
            src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
            alt="Image Description"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
