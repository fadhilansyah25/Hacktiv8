import React, { Component } from "react";

type MyState = {
  pastMeetups: {
    date: string;
    eventName: string;
    members: number;
  }[];
};

export default class LandingPage extends Component<{}, MyState> {
  state: MyState = {
    pastMeetups: [
      {
        date: "27 November 2017",
        eventName: "#39 JakartaJS April Meetup with Kumparan",
        members: 139,
      },
      {
        date: "27 October 2017",
        eventName: "#38 JakartaJS April Meetup with BliBli",
        members: 113,
      },
      {
        date: "27 September 2017",
        eventName: "#37 JakartaJS April Meetup with Hactiv8",
        members: 110,
      },
    ],
  };

  render() {
    return (
      <>
        <nav className="h-14 bg-neutral-500">
          <div className="px-5 max-w-5xl mx-auto flex justify-between items-center h-full">
            <div className="flex">
              <div className="logo text-2xl font-semibold text-white">
                QTemu
              </div>
              <div className="flex items-center ml-10">
                <a href="/#" className="mx-2 text-white">
                  Create Menu
                </a>
                <a href="/#" className="mx-2 text-white">
                  Explore
                </a>
              </div>
            </div>
            <p className="text-right text-white">Login</p>
          </div>
        </nav>

        <div className="max-w-5xl container px-4 mx-auto grid m-4 grid-flow-row grid-cols-12 bg-neutral-300 py-4">
          <div className="photo col-span-4 h-80 mr-10 bg-neutral-400"></div>
          <div className="content col-span-8 flex flex-col justify-between">
            <h1 className="text-4xl	font-medium">Hacktiv8</h1>
            <div className="flex flex-col gap-y-7">
              <div className="flex">
                <p className="w-20 mr-10">Location</p>
                <p>Jakarta, Indonesia</p>
              </div>
              <div className="flex">
                <p className="w-20 mr-10">Members</p>
                <p>1,078</p>
              </div>
              <div className="flex">
                <p className="w-20 mr-10">Organizers</p>
                <p>Adhy Wiranata</p>
              </div>
            </div>
            <button className="bg-neutral-600 text-white py-4 w-50 w-1/4">
              Join Us
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-7">
          <h1 className="text-2xl	font-bold mb-2">Hacktiv8</h1>
          <div className="px-2">
            <div className="bg-neutral-300 p-4 mx-auto">
              <p className="font-medium">Awesome meetup and event</p>
              <br />
              <p>25 januari 2019</p>
              <br />
              <p>
                Heloo, Javascript & Node.js Ninjas! <br />
                Get ready for our montly meetup JakartaJS! This will be our
                fifth meetup of 2018! <br /> The meetup format will contain some
                short stories and technical talks. <br /> If you have a short
                announcement you'd like to share with the audience, you may do
                so during open mic announcements.
                <br />
                <br />
                Remember to bring a photo ID to get through building security.
              </p>
              <p>-----</p>
              <p>See you there!</p>
              <p>
                Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS
                Organizers
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-7">
          <h1 className="text-2xl	font-bold mb-2">About Meetup</h1>
          <div className="px-2">
            <p>
              Come and meet other developers interested in the JavaScript and
              it's library in the Greater Jakarta area.
            </p>
            <br />
            <p>Twitter: @JakartaJS and we use the hashtag #jakartajs</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-7">
          <div className="flex justify-between">
            <h1 className="text-2xl	font-bold mb-2">Members</h1>
            <p className="text-slate-400">See all</p>
          </div>
          <div className="px-2">
            <div className="flex items-stretch bg-neutral-300 p-4 mx-auto">
              <div className="w-20 h-20 rounded-full bg-gray-500 mr-10"></div>
              <div className="flex flex-col gap-y-5 justify-center">
                <p className="font-medium text-lg">Organizers</p>
                <div className="flex gap-x-4">
                  <p>Adhy Wiranata</p>
                  <p>4 others.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-7">
          <div className="flex justify-between">
            <h1 className="text-2xl	font-bold mb-2">Past Meetups</h1>
            <p className="text-slate-400">See all</p>
          </div>
          <div className="px-2 flex gap-x-2 justify-between">
            {this.state.pastMeetups.map((meetup) => (
              <div className="card p-5 bg-gray-200 max-w-xs flex flex-col justify-between">
                <div>
                  <p className="font-medium mb-2 py-2 border-b-2 border-black">
                    {meetup.date}
                  </p>
                  <p className="my-3 font-medium">{meetup.eventName}</p>
                  <p className="text-gray-500 mb-5">
                    <span className="font-bold text-black">
                      {meetup.members}
                    </span>{" "}
                    went
                  </p>
                </div>
                <button className="bg-neutral-600 text-white py-2 w-1/4">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

        <footer className="max-w-5xl py-10 mx-auto text-center mt-10 border-t-2 border-black">
          <p>Copyright Hacktiv8 2018</p>
        </footer>
      </>
    );
  }
}
