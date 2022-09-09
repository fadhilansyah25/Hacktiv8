import React from "react";

export default class AboutMeetupDescription extends React.Component {
  render() {
    return (
      <section className="container max-w-5xl mx-auto">
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            <a
              href="/"
              aria-label="View"
              className="inline-block mb-5 rounded-full sm:mx-auto"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-blue-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h2 className="mb-4 font-sans text-3  xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              About Meetup
            </h2>
            <p className="text-base text-gray-700 md:text-lg sm:px-4">
              Come and meet other developers interested in the JavaScript and
              it's library in the Greater Jakarta area.
              <br />
              Twitter: @JakartaJS and we use the hashtag #jakartajs
            </p>
            <hr className="w-full my-8 border-gray-300" />
          </div>
        </div>
      </section>
    );
  }
}
