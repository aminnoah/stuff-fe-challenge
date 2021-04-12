import { render } from "@testing-library/react";
import React from "react";
import DatePicker from "./date-picker";


const DOB = () => {
  return (
    <div className="DOB-picker">
      <form>
        <label for="DOB">Date of Birth</label>
        <input
        className="DOB"
          onFocus={(e) => {
            e.preventDefault();
            render(
            <DatePicker />)
            console.log("Focused on input");
          }}
          placeholder="onFocus is triggered when you click this input."
        />
      </form>
      <div className="calendar-pop-up"></div>
    </div>
  );
};

export default DOB;
