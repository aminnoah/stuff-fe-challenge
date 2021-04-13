import React, { useEffect, useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

const DatePicker = (props) => {
  let [day, setDay] = useState(15);
  let [month, setMonth] = useState(0);
  let [year, setYear] = useState(2021);

  const { setDateString } = props;

  let monthsList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    setDateString(`${monthsList[month]}, ${day} ${year}`);
  }, [month, day, year]);

  const range = (start, end) => {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
  };
  // const shortenMonth = () => {
  //   const { months, DayOfMonth, year } = date;
  //   let shortMonths = [];
  //   for (let i = 0; i < months.length; i++) {
  //     let abv = months[i].slice(0, 3);
  //     shortMonths.push(abv);
  //   }
  //   console.log(shortMonths);
  // };

  const increaseMonth = () => {
    month < 11 ? setMonth(month + 1) : setMonth(0);
  };

  const decreaseMonth = () => {
    month > 0 ? setMonth(month - 1) : setMonth(11);
  };

  const increaseDay = () => {
    day < 31 ? setDay(day + 1) : setDay(1);
  };

  const decreaseDay = () => {
    day > 1 ? setDay(day - 1) : setDay(31);
  };

  const increaseYear = () => {
    year < 2021 ? setYear(year + 1) : setYear(2021);
  };

  return (
    <div className="container">
      <div className="date">
        <div className="month-container">
          <div className="up-arrow">
            <MdExpandLess
              onClick={() => {
                decreaseMonth();
              }}
            />
          </div>
          <p className="text">{monthsList[month]}</p>
          <div className="down-arrow">
            <MdExpandMore
              onClick={() => {
                increaseMonth();
              }}
            />
          </div>
        </div>
        <div className="day-container">
          <div className="up-arrow">
            <MdExpandLess onClick={() => increaseDay()} />
          </div>
          <p>{day}</p>
          <div className="down-arrow">
            <MdExpandMore onClick={() => decreaseDay()} />
          </div>
        </div>
        <div className="year-container">
          <div className="up-arrow">
            <MdExpandLess onClick={() => increaseYear()} />
          </div>
          <p>{year}</p>
          <div className="down-arrow">
            <MdExpandMore onClick={() => setYear(year - 1)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
