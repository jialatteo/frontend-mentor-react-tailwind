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
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft);
  const [rotateDays, setRotateDays] = useState(false);
  const [rotateHours, setRotateHours] = useState(false);
  const [rotateMinutes, setRotateMinutes] = useState(false);
  const [rotateSeconds, setRotateSeconds] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = getTimeLeft(targetDate);

      if (newTimeLeft.days !== prevTimeLeft.days) {
        setRotateDays((prev) => !prev);
      }

      if (newTimeLeft.hours !== prevTimeLeft.hours) {
        setRotateHours((prev) => !prev);
      }

      if (newTimeLeft.minutes !== prevTimeLeft.minutes) {
        setRotateMinutes((prev) => !prev);
      }

      if (newTimeLeft.seconds !== prevTimeLeft.seconds) {
        setRotateSeconds((prev) => !prev);
      }

      setPrevTimeLeft(newTimeLeft);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, prevTimeLeft]);

  return (
    <div>
      <div className="flex justify-center gap-2 text-launch-countdown-timer-soft-red sm:gap-4 md:gap-6 lg:gap-10">
        <div>
          <div
            className={`flex w-[60px] origin-center justify-center rounded-xl bg-launch-countdown-timer-dark-desaturated-blue p-2 duration-1000 min-[400px]:p-6 sm:w-[130px] sm:p-12 md:w-[160px] lg:w-[200px] xl:w-[280px] ${rotateDays && "[transform:rotateX(360deg)]"} `}
          >
            <p className="text-3xl sm:text-5xl md:text-7xl xl:text-9xl">
              {formatTimeWithLeadingZero(timeLeft.days)}
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-launch-countdown-timer-grayish-blue sm:text-sm sm:tracking-[0.4rem] md:text-xl">
            DAYS
          </p>
        </div>
        <div>
          <div
            className={`flex w-[60px] origin-center justify-center rounded-xl bg-launch-countdown-timer-dark-desaturated-blue p-2 duration-1000 min-[400px]:p-6 sm:w-[130px] sm:p-12 md:w-[160px] lg:w-[200px] xl:w-[280px] ${rotateHours && "[transform:rotateX(360deg)]"} `}
          >
            <p className="text-3xl sm:text-5xl md:text-7xl xl:text-9xl">
              {formatTimeWithLeadingZero(timeLeft.hours)}
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-launch-countdown-timer-grayish-blue sm:text-sm sm:tracking-[0.4rem] md:text-xl">
            HOURS
          </p>
        </div>
        <div>
          <div
            className={`flex w-[60px] origin-center justify-center rounded-xl bg-launch-countdown-timer-dark-desaturated-blue p-2 duration-1000 min-[400px]:p-6 sm:w-[130px] sm:p-12 md:w-[160px] lg:w-[200px] xl:w-[280px] ${rotateMinutes && "[transform:rotateX(360deg)]"} `}
          >
            <p className="text-3xl sm:text-5xl md:text-7xl xl:text-9xl">
              {formatTimeWithLeadingZero(timeLeft.minutes)}
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-launch-countdown-timer-grayish-blue sm:text-sm sm:tracking-[0.4rem] md:text-xl">
            MINUTES
          </p>
        </div>
        <div>
          <div
            className={`flex w-[60px] origin-center justify-center rounded-xl bg-launch-countdown-timer-dark-desaturated-blue p-2 duration-1000 min-[400px]:p-6 sm:w-[130px] sm:p-12 md:w-[160px] lg:w-[200px] xl:w-[280px] ${rotateSeconds && "[transform:rotateX(360deg)]"} `}
          >
            <p className="text-3xl sm:text-5xl md:text-7xl xl:text-9xl">
              {formatTimeWithLeadingZero(timeLeft.seconds)}
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-launch-countdown-timer-grayish-blue sm:text-sm sm:tracking-[0.4rem] md:text-xl">
            SECONDS
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
