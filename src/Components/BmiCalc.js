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
          <div>
            <input label="Feet"></input>
            <input label="Inches"></input>
          </div>
          <div>
            <input label="Height"></input>
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
