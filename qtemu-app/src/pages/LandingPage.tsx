import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NextMeetupDescription from "../containers/NextMeetupDescription";
import MainContent from "../containers/MainContent";
import MeetupData from "./meetup.json";
import AboutMeetupDescription from "../containers/AboutMeetupDescription";
import PastMeetupsDescription from "../containers/PastMeetupsDescription";
import MembersMeetupDetails from "../containers/MembersMeetupDetails";

export type Meetup = {
  id: number;
  date: string;
  eventName: string;
  members: number;
  imageUrl: string;
  description: string;
};

type CompState = {
  pastMeetups: Array<Meetup>;
};

export default class LandingPage extends React.Component<{}, CompState> {
  state: CompState = {
    pastMeetups: MeetupData,
  };

  render() {
    return (
      <>
        {/* Navbar Component */}
        <Navbar
          nav={[
            { title: "Create Meetup", links: "/create-meetup" },
            { title: "Explore", links: "/explore" },
          ]}
        />

        {/* Main content */}
        <MainContent />

        {/* Next Meetup Description */}
        <NextMeetupDescription />

        {/* About Meetup Description */}
        <AboutMeetupDescription />

        {/* Members Meetup Details */}
        <MembersMeetupDetails />

        {/* Past Meetups Description*/}
        <PastMeetupsDescription pastMeetups={this.state.pastMeetups} />

        {/* Footer */}
        <Footer />
      </>
    );
  }
}
