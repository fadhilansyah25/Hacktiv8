import React from "react";
import Card from "../components/Card";
import { Meetup } from "../pages/LandingPage";

type Props = {
  pastMeetups: Array<Meetup>;
};

export default class PastMeetupsDescription extends React.Component<Props> {
  render() {
    return (
      <section className="container max-w-5xl mx-auto mt-10 py-10">
        <h1 className="text-3xl	font-semibold mb-6">Past Meetups</h1>

        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {this.props.pastMeetups.map((meetup, id) => (
              <Card
                id={id}
                date={meetup.date}
                imageUrl={meetup.imageUrl}
                description={meetup.description}
                title={meetup.eventName}
                topic={`${meetup.members} Members`}
                key={id}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded text-blue-600 hover:bg-purple-600 hover:text-white focus:shadow-outline focus:outline-none"
            >
              See more
            </a>
          </div>
        </div>
      </section>
    );
  }
}
