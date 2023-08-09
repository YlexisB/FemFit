import React from "react";

const BmiCalc = () => {
  return (
    <section id="bmi-section">
      <div className="bmi-all">
        <div className="bmi-title-metrics">
          <h1> CALCULATE BMI</h1>
          <div>
            <input></input>
          </div>
          <div className="inputs">
            <label for="height">Height:</label>
            <br />
            <input
              placeholder="FT:-"
              type="number"
              id="feet"
              name="feet"
              min=""
              max="7"
            ></input>

            <input
              placeholder="IN:-"
              type="number"
              id="inches"
              name="inches"
              min="0"
              max="11"
            ></input>
          </div>
          <div>
            <label for="weight">Weight:</label>
            <br />
            <input label="weight" placeholder="LBS:-"></input>
          </div>
          <button>CALCULATE</button>
        </div>

        <div className="img-contain">
          <img src="./images/bmi/bmi-pic.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default BmiCalc;
