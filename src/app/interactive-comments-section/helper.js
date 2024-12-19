export const getTimeAgoString = (timeCreatedISOString) => {
  const timeCreatedDate = new Date(timeCreatedISOString);
  const nowDate = new Date();
  const diffInMs = nowDate - timeCreatedDate;

  const msPerMinute = 60 * 1000;
  const msPerHour = 60 * msPerMinute;
  const msPerDay = 24 * msPerHour;
  const msPerWeek = 7 * msPerDay;
  const msPerMonth = 30 * msPerDay;
  const msPerYear = 365 * msPerDay;
  const formatTime = (value, unit) =>
    `${value} ${unit}${value === 1 ? "" : "s"} ago`;

  let timeDifference;
  if (diffInMs < msPerMinute) {
    timeDifference = formatTime(Math.round(diffInMs / 1000), "second");
  } else if (diffInMs < msPerHour) {
    timeDifference = formatTime(Math.round(diffInMs / msPerMinute), "minute");
  } else if (diffInMs < msPerDay) {
    timeDifference = formatTime(Math.round(diffInMs / msPerHour), "hour");
  } else if (diffInMs < msPerWeek) {
    timeDifference = formatTime(Math.round(diffInMs / msPerDay), "day");
  } else if (diffInMs < msPerMonth) {
    timeDifference = formatTime(Math.round(diffInMs / msPerWeek), "week");
  } else if (diffInMs < msPerYear) {
    timeDifference = formatTime(Math.round(diffInMs / msPerMonth), "month");
  } else {
    timeDifference = formatTime(Math.round(diffInMs / msPerYear), "year");
  }

  return timeDifference;
};
