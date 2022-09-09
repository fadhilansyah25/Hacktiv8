import React from "react";

export default class MainContent extends React.Component {
  render() {
    return (
      <section className="max-w-5xl mx-auto">
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Hacktiv8 Meetup
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Hacktiv8 Meetup is a community of developers who are
                  interested in learning and sharing knowledge about web
                  development.
                </p>
              </div>
              <div className="p-8 bg-white border rounded shadow-sm">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <a
                    href="/"
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                  >
                    Jakarta, Indonesia
                  </a>{" "}
                  <span className="text-gray-600"> — 1,078 Members</span>
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  title="Jingle Bells"
                  className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  A deep dive into Javascript
                </a>
                <p className="mb-5 text-gray-700">
                  Learn the fundamentals of Javascript and how to use it to
                  build web applications.
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="Author"
                    title="Author"
                    className="mr-3"
                  >
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="avatar"
                      className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      title="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Adhy Wiranata
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Organizers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-first">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
