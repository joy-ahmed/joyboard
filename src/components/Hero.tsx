import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh-64px)] lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-teal-700 font-extrabold sm:text-5xl">
          Documents & diagrams 
            <strong className="font-extrabold text-slate-800 sm:block">
            for the creative teams
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Unleash Your Engineering Team's Creativity!
            Revolutionary Markdown Master, Team-Friendly Canvas, and Visionary
            Diagram Wizard.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              href="#"
            >
              Try Atomix
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
