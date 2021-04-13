import React, { useState } from "react";
import DatePicker from "./date-picker";


const DOB = () => {

  let [dateString, setDateString]= useState('birthday here')
  let [display, setDisplay] = useState(false)

  return (
    <div className="DOB-picker">
      <form>
        <label className="DOB-label" onClick={()=>setDisplay(false)} for="DOB">Date of Birth</label>
        <br></br>
        <input
        id="DOB"
          onClick={(e) => {
            e.preventDefault();
            setDisplay(true)
          }}
          placeholder="onFocus is triggered when you click this input."
          value={dateString}
        />
      </form>
      <div className="calendar-pop-up">{display && <DatePicker setDateString={setDateString} />} </div>
    </div>
  );
};

export default DOB;
