import React, { useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";




const DatePicker = () => {
  const [day, setDay] = useState(15);
  const [month, setMonth] = useState()
  const [year, setYear] = useState(2021);
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
  let monthsList = [
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
  ]
  

  return (
    <div className="container">
      <div className="date">
        <div className="year" style={{ backgroundColor: "red" }}>
          <div>
            <MdExpandLess
            onClick={() => {
              let nextMonth = '';
              for (let i = 0; i < monthsList.length; i++) {         
                let nextMonth = monthsList[i + 1];
                }
                setMonth(nextMonth)
              }
            }
            />
            <p>{month}</p>
            <MdExpandMore
            onClick={() => setMonth(month - 1)}
            />
          </div>
          <div>
            <MdExpandLess
            onClick={() => setDay(day + 1)}
            />
            <p>{day}</p>
            <MdExpandMore 
            onClick={() => setDay(day - 1)}
            />
          </div>
          <div>
            <MdExpandLess
            onClick={() => setYear(year + 1)}
            />
            <p>{year}</p>
            <MdExpandMore
            onClick={() => setYear(year - 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
