import React, { useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

const DatePicker = () => {
  const [monthCount, setMonth] = useState(0);
  const range = (start, end) => {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
  };
  const shortenMonth = () => {
    const { months, DayOfMonth, year } = date;
    let shortMonths = [];
    for (let i = 0; i < months.length; i++) {
      let abv = months[i].slice(0, 3);
      shortMonths.push(abv);
    }
    console.log(shortMonths);
  };
  let date = {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    DayOfMonth: 11,
    year: 2021,
  };
  return (
    <div className="container">
      <div className="date">
        <div className="year" style={{ backgroundColor: "red" }}>
          <div>
            <MdExpandLess />
            <p>{shortenMonth()}</p>
            <MdExpandMore />
          </div>
          <div>
            <MdExpandLess />
            <p>{date.DayOfMonth}</p>
            <MdExpandMore />
          </div>
          <div>
            <MdExpandLess />
            <p>{date.year}</p>
            <MdExpandMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
