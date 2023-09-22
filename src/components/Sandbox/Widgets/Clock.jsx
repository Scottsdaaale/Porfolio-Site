import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const day = time.getDay();
  const month = time.getMonth();
  const dayNumber = time.getDate(); // Get the day number
  const hour = time.getHours() % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();

  // Calculate angles for clock hands
  const dayAngle = (day + hour + minute / 60) * 360;
  const hourAngle = (hour + minute / 60) * 360 / 12;
  const minuteAngle = (minute + second / 60) * 360 / 60;
  const secondAngle = (second * 360) / 60;

  // Convert day and month to readable strings
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const dayString = daysOfWeek[day];
  const monthString = months[month];

  return (
    <div className="analog-clock">
      <svg width="200" height="200">
        {/* Clock Face */}
        <circle cx="100" cy="100" r="80" fill="rgb(43, 43, 43)" />
        {/* Day Text */}
        <text x="100" y="65" textAnchor="middle" fill="grey">{dayString}</text>
        {/* Month Text */}
        <text x="100" y="145" textAnchor="middle" fill="grey">{monthString}</text>
        {/* Day Number Text */}
        <text x="100" y="165" textAnchor="middle" fill="grey">{dayNumber}</text>
        {/* Hour Hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="40"
          stroke="black"
          strokeWidth="4"
          transform={`rotate(${hourAngle}, 100, 100)`}
        />
        {/* Minute Hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="25"
          stroke="black"
          strokeWidth="2"
          transform={`rotate(${minuteAngle}, 100, 100)`}
        />
        {/* Second Hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="30"
          stroke="red"
          strokeWidth="1"
          transform={`rotate(${secondAngle}, 100, 100)`}
        />
        {/* Clock Center */}
        <circle cx="100" cy="100" r="4" fill="black" />
      </svg>
    </div>
  );
}

export default Clock;
