"use client";
import React, { useState, useEffect } from "react";

const formatTimeWithLeadingZero = (time) => {
  return String(time).padStart(2, 0);
};

const getTimeLeft = (targetDate) => {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="text-launch-countdown-timer-soft-red flex justify-center gap-10">
        <div>
          <div
            className={`bg-launch-countdown-timer-dark-desaturated-blue flex min-w-[280px] justify-center rounded-xl p-12 duration-500 ${rotate && "[transform:rotateY(180deg)]"} `}
          >
            <p className="text-9xl">
              {formatTimeWithLeadingZero(timeLeft.days)}
            </p>
          </div>
          <p className="text-launch-countdown-timer-grayish-blue mt-6 text-center text-xl tracking-[0.4rem]">
            DAYS
          </p>
        </div>
        <div>
          <div className="bg-launch-countdown-timer-dark-desaturated-blue flex min-w-[280px] justify-center rounded-xl p-12">
            <p className="text-9xl">
              {formatTimeWithLeadingZero(timeLeft.hours)}
            </p>
          </div>
          <p className="text-launch-countdown-timer-grayish-blue mt-6 text-center text-xl tracking-[0.4rem]">
            HOURS
          </p>
        </div>
        <div>
          <div className="bg-launch-countdown-timer-dark-desaturated-blue flex min-w-[280px] justify-center rounded-xl p-12">
            <p className="text-9xl">
              {formatTimeWithLeadingZero(timeLeft.minutes)}
            </p>
          </div>
          <p className="text-launch-countdown-timer-grayish-blue mt-6 text-center text-xl tracking-[0.4rem]">
            MINUTES
          </p>
        </div>
        <div>
          <div
            className={`bg-launch-countdown-timer-dark-desaturated-blue flex min-w-[280px] justify-center rounded-xl p-12 duration-500 ${rotate && "[transform:rotateY(180deg)]"} `}
          >
            <p className="text-9xl">
              {formatTimeWithLeadingZero(timeLeft.seconds)}
            </p>
          </div>
          <p className="text-launch-countdown-timer-grayish-blue mt-6 text-center text-xl tracking-[0.4rem]">
            SECONDS
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
