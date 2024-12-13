const Database = require("better-sqlite3");

// Connect to the database (the init.db file)
const db = new Database("init.db");

// Execute the query to get all rows from the 'comments' table
const rows = db.prepare("SELECT * FROM comments").all();

const timeCreated = rows?.[0]?.created_at;
const getTimeAgoString = (timeCreatedISOString) => {
  const timeCreatedDate = new Date(timeCreatedISOString);
  const now = new Date();
  const diffInMs = now - timeCreatedDate;

  const msPerMinute = 60 * 1000;
  const msPerHour = 60 * msPerMinute;
  const msPerDay = 24 * msPerHour;
  const msPerWeek = 7 * msPerDay;
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
  } else {
    timeDifference = formatTime(Math.round(diffInMs / msPerWeek), "week");
  }

  return timeDifference;
};

// console.log("timeAgoString", getTimeAgoString(timeCreated));
console.log("rows", rows);

// Close the database connection
db.close();
