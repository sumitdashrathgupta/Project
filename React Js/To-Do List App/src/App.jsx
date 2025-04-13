import React, { useState } from "react";
import "./App.css";
import Data from "./Data";

function App() {
  let [data, setData] = useState("");


  const submitEvent = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="content">
        <div className="input_data">
          <form onSubmit={submitEvent}>
            <input
              type="text"
              placeholder="Enter the Data"
              name="text"
              id="text"
            />
            <button className="btn">Add</button>
          </form>
        </div>
        <div className="Data">
          <Data text={data} />
        </div>
      </div>
    </>
  );
}

export default App;
