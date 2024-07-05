import { FaEarthAmericas, FaPeopleGroup, FaUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const iconsData = [
  { icon: <FaEarthAmericas />, text: "countries", name:"16+"},
  { icon: <SlCalender />, text: "Events", name:'30'},
  { icon: <FaPeopleGroup />, text: "Attendees" ,name:"10000"},
  { icon: <FaUser />, text: "Speakers", name:"20+" },
];

export const Info = () => {
  return (
    <div className="px-3 md:px-8 bg-[#1a1757] mb-10 flex py-6 flex-col gap-y-4 text-white">
      <h1 className="text-bold text-xl uppercase md:text-4xl">
        Blockchain Council Conference
      </h1>
      <p className="text-medium text-lg md:text-3xl font-medium">
        Leading the Way in Cryptocurrency and Blockchain Conferences
      </p>
      <div className="flex flex-col md:flex-row md:gap-x-8 mt-4">
        <div className="flex-1 gap-y-4 flex flex-col">
       <p>   Welcome to Bitcoin Council Conference, the pioneers and organisers of
          premier cryptocurrency and blockchain events. Since 2015, we have been
          at the forefront, bringing you world-class conferences in northwestern
          London.</p>
          <p>We take pride in being one of the largest events company
          dedicated to hosting top-notch gatherings centered around
          cryptocurrencies and blockchain technology in the UK and Europe. Our
          track record speaks for itself. With nine highly successful annual
          Blockchain Conferences, five incredible Crypto Fest events, and two
          groundbreaking DeFi Conferences, we have established ourselves as
          industry leaders. Each event has been a resounding success, attracting
          an impressive lineup of prominent speakers and drawing over 10,000
          plus attendees from a staggering 16+ countries. </p>
          <p>
          Bitcoin Events is
          dedicated to delivering exceptional experiences that leave a lasting
          impact. We strive to create an environment that encourages
          collaboration, sparks inspiration, and drives meaningful change.
          </p>
          </div> 
          
          
        
        <div className="flex-1">
          <p>
            Bitcoin Events is dedicated to delivering exceptional experiences
            that leave a lasting impact. We strive to create an environment that
            encourages collaboration, sparks inspiration, and drives meaningful
            change.
          </p>
          <div className="icons mt-20 flex  justify-between gap-4">
            {iconsData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center w-1/2 md:w-1/4">
                <div className="text-4xl">{item.icon}</div>
                <div className="mt-2 text-blue-500 text-3xl">{item.name}</div>
                <div className="mt-2">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
