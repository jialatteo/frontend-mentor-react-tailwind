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
      console.log("newTimeLeft", newTimeLeft);
      console.log("prevTimeLeft", prevTimeLeft);
      console.log("wait one second", "\n");

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
      <div className="text-launch-countdown-timer-soft-red flex justify-center gap-10">
        <div>
          <div
            className={`bg-launch-countdown-timer-dark-desaturated-blue flex min-w-[280px] origin-center justify-center rounded-xl p-12 duration-500 ${rotateDays && "[transform:rotateX(180deg)]"} `}
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
          <div
            className={`bg-launch-countdown-timer-dark-desaturated-blue flex min-w-[280px] origin-center justify-center rounded-xl p-12 duration-500 ${rotateHours && "[transform:rotateX(180deg)]"} `}
          >
            <p className="text-9xl">
              {formatTimeWithLeadingZero(timeLeft.hours)}
            </p>
          </div>
          <p className="text-launch-countdown-timer-grayish-blue mt-6 text-center text-xl tracking-[0.4rem]">
            HOURS
          </p>
        </div>
        <div>
          <div
            className={`bg-launch-countdown-timer-dark-desaturated-blue flex min-w-[280px] origin-center justify-center rounded-xl p-12 duration-500 ${rotateMinutes && "[transform:rotateX(180deg)]"} `}
          >
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
            className={`bg-launch-countdown-timer-dark-desaturated-blue flex min-w-[280px] origin-center justify-center rounded-xl p-12 duration-500 ${rotateSeconds && "[transform:rotateX(180deg)]"} `}
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
