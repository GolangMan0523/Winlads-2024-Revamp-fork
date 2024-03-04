import  { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function RaffleComponent() {
  const [value, onChange] = useState (new Date());

  return (
    <div>
 
      <div className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{
            background: "#FFECA8",
            border: "none",
            marginBottom: "40px",
            width: "100%",
            height: "50px",
            borderRadius: "10px",
            padding: "10px",
          }}
        />
      </div>
      <Calendar
        value={value}
        onChange={onChange}
        className="xl:w-2/5 " 
        
      
      />
    </div>
  );
}
export default RaffleComponent;

