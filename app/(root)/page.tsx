"use client"; // Mark as Client Component

import { Heading } from './_components/heading';
import ToggleEvents from './_components/event_descriptions';
import { Footer } from './_components/footer';
import HackathonSchedule from './_components/event_timeline';
import ContactUs from './_components/contactUs';

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      {/* Apply padding-top to account for the NavBar */}
      <div className="flex flex-col items-center justify-center md:justify-start text-center flex-1 px-6 pb-10 -mt-28">
        <Heading />
        <div id="toggle-events">
          <ToggleEvents />
        </div>

        {/* Hackathon Schedule Section */}
        <div className="w-[75%] max-w-[1300px] mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-6 px-6 rounded-lg shadow-2xl">
          <HackathonSchedule />
        </div>

        {/* Contact Us Section with Upper Margin */}
        <div className="mt-12 w-full flex justify-center">
          <ContactUs />
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default MarketingPage;
