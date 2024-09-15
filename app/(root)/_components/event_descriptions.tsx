"use client"; // Mark as Client Component

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Using Lucide for arrows

interface EventInfo {
  title: string;
  description: string;
  image?: string; // Optional image for the event
}

const eventsData: EventInfo[] = [
  {
    title: 'Networking Session',
    description: 'We are excited to host a vibrant networking session bringing together esteemed participants from IBM, members of QSB-SU, distinguished professors actively engaged in quantum research, and a passionate community from across Istanbul eager to explore the world of quantum technologies.',
    image: './Networking.jpg', // Replace with your actual image path
  },
  {
    title: 'Lectures',
    description: 'You are invited to join five training sessions led by IBM instructors, where you will learn the fundamentals of solving problems using quantum technologies and gain the essential knowledge for the hackathon. The sessions will be held at Sabancı University, with a limited quota of 80 participants. Hurry up to secure your seat…',
    image: './Seminar.jpg', // Replace with your actual image path
  },
  {
    title: 'Hackathon',
    description: "Everyone is welcome to join our hackathon—no prior knowledge of quantum technologies is required! With basic Python skills and the training provided during the event, you'll be able to start solving problems using quantum technologies in teams of up to 4 participants. The Hackathon session will be held at Sabancı University, with a limited quota of 10 teams. Hurry up to secure your seat.",
    image: './Competition.jpg', // Replace with your actual image path
  },
];

const ToggleEvents: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState<number>(0);

  const nextEvent = () => {
    setCurrentEvent((prevEvent) => (prevEvent + 1) % eventsData.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prevEvent) => (prevEvent - 1 + eventsData.length) % eventsData.length);
  };

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
      <div className="flex items-center justify-between">
        {/* Previous Arrow */}
        <button onClick={prevEvent} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ChevronLeft className="h-8 w-8" />
        </button>

        {/* Event Information */}
        <div className="text-center flex-1 px-6">
          {/* Event Title */}
          <h2 className="text-3xl font-bold mb-4">{eventsData[currentEvent].title}</h2>

          {/* Event Image (if exists) */}
          {eventsData[currentEvent].image && (
            <div className="mb-6 flex justify-center">
              <img
                src={eventsData[currentEvent].image}
                alt={eventsData[currentEvent].title}
                className="w-[80%] h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Event Description */}
          <p className="text-lg mb-4 min-h-[120px]">{eventsData[currentEvent].description}</p>
          
        </div>

        {/* Next Arrow */}
        <button onClick={nextEvent} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default ToggleEvents;
