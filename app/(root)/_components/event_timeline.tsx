"use client"; // Mark as Client Component

interface EventTimelineProps {
  day: string;
  timeline: { time: string; event: string }[];
}

const EventTimeline: React.FC<EventTimelineProps> = ({ day, timeline }) => {
  return (
    <div className="w-full md:w-[48%] bg-white rounded-lg shadow-lg p-6 mb-8 h-full flex flex-col justify-between">
      <h2 className="text-2xl font-bold mb-4 text-center">{day}</h2>
      <hr className="border-t-2 w-[80%] mx-auto border-black mb-6" /> {/* Horizontal line under title */}
      <ul className="space-y-4 text-center">
        {timeline.map((item, index) => (
          <li key={index} className="text-lg font-normal">
            <span className="font-semibold">{item.time}:</span> {item.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TansferDetails = () => {
  return (
    <div className="w-full bg-[#282828] text-white py-10 px-6 mt-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Transportation</h2>
      <p className="text-lg text-center">
        Join us for an exclusive networking session where participants can engage with fellow quantum enthusiasts, 
        <br />exchange ideas, and learn the field of quantum computing.
      </p>
    </div>
  );
};

const HackathonSchedule: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">Event Schedule</h1>

      {/* Side by Side Timelines */}
      <div className="flex flex-col md:flex-row justify-center md:space-x-6 space-y-6 md:space-y-0">
        <EventTimeline
          day="Day 1:"
          timeline={[
            { time: '9:00 AM', event: 'Opening Speech' },
            { time: '9:10 AM', event: 'IBM Introduction' },
            { time: '9:40 AM', event: 'Networking' },
            { time: '10:10 AM', event: 'Session 1' },
            { time: '11:00 AM', event: 'Break' },
            { time: '11:10 AM', event: 'Session 2' },
            { time: '12:00 PM', event: 'Break' },
            { time: '12:10 PM', event: 'Session 3' },
            { time: '1:00 PM', event: 'Lunch Break' },
            { time: '2:00 PM', event: 'Session 4' },
            { time: '2:50 PM', event: 'Break' },
            { time: '3:00 PM', event: 'Session 5' },
            { time: '3:50 PM', event: 'Break' },
            { time: '4:00 PM', event: 'Session 6' },
            { time: '4:50 PM', event: 'Networking' },
            { time: '5:30 PM', event: 'Shuttle' }
          ]}
        />
        <EventTimeline
          day="Day 2:"
          timeline={[
            { time: '9:00 AM', event: 'Opening - Networking' },
          { time: '9:30 AM', event: 'Problem Introduction' },
          { time: '10:00 AM', event: 'Hackathon Start' },
          { time: '4:00 PM', event: 'Project Submission' },
          { time: '4:10 PM', event: 'Break' },
          { time: '4:25 PM', event: 'Solution of the Problem' },
          { time: '5:10 PM', event: 'Award Ceremony' },
          { time: '5:55 PM', event: 'Closing and Thanks' },
          { time: '6:30 PM', event: 'Shuttle' }
          ]}
        />
      </div>
      <TansferDetails />
    </div>
  );
};


export default HackathonSchedule;
