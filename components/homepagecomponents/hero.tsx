"use client";
import React, { useState, useEffect } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { SlCalender } from "react-icons/sl";
interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Hero: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2024-07-10') - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval as keyof TimeLeft] !== undefined) {
      timerComponents.push(
        <span key={interval} className="mx-1">
          {timeLeft[interval as keyof TimeLeft]} {interval}{" "}
        </span>
      );
    }
  });

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 bg-cover opacity-90 bg-center text-white"
      style={{ backgroundImage: `url('/hero.webp')` }}
    >
      <h1 className="text-xl md:text-4xl font-bold mb-4">Countdown to our next event on July 10</h1>
      <div className="text-sm md:text-2xl ">
        {timerComponents.length ? timerComponents : <span>Times up!</span>}
      </div>
      <h1 className=' text-xl md:text-4xl font-bold '>
        Blockchain Council Conference
      </h1>
      <h1 className=' text-2xl md:text-6xl font-bold '>
      NEXT EVENT: CRYPTO FEST 2024
      </h1>
    <div className='flex items-center gap-x-4 justify-between'>
    <div className='flex gap-x-3'>
        <SlCalender size={24}/>
        <p>10-11 July, 2024</p>
      </div>
      <div className='flex gap-x-3 items-center'>
        <FaLocationArrow size={24}/>
        <p className='text-xs'> One Western Gateway,<br /> Royal Victoria Dock, <br /> London, Greater London,E16 1XL</p>
      </div>
    </div>
    </div>
  );
};

export default Hero;
