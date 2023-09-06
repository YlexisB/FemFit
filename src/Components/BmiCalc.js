import React, { useState } from "react";
import { BMI_STUFF } from "../constants";
import { Formik } from "formik";

const BmiCalc = () => {
  const [heightInches, setHeightInches] = useState("");
  const [weightPounds, setWeightPounds] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [healthStatus, setHealthStatus] = useState("");

  const handleHeightChange = (event) => {
    setHeightInches(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeightPounds(event.target.value);
  };

  const calculateBMI = () => {
    if (heightInches && weightPounds) {
      const heightMeters = heightInches * 0.0254;
      const weightKilograms = weightPounds * 0.45359237;
      const bmi = (weightKilograms / (heightMeters * heightMeters)).toFixed(1);
      setBmiResult(bmi);
      setHealthStatus(getHealthStatus(bmi));
    }
  };

  const getHealthStatus = (bmi) => {
    if (bmi < 18.5) {
      return " You are underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "You are at an average/healthy weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return " You are overweight";
    } else {
      return "You are obese";
    }
  };

  const clearResult = () => {
    setHeightInches("");
    setWeightPounds("");
    setBmiResult(null);
    setHealthStatus("");
  };

  return (
    <section id="bmi-section">
      <div className="bmi-all">
        <div className="bmi-title-metrics">
          <h1> {BMI_STUFF.title}</h1>
          {bmiResult === null ? (
            <Formik>
              <form>
                <div className="inputs">
                  <label for="height">{BMI_STUFF.height}</label>
                  <br />

                  <input
                    placeholder="IN:-"
                    type="number"
                    id="inches"
                    name="inches"
                    value={heightInches}
                    onChange={handleHeightChange}
                  ></input>
                </div>
                <div>
                  <label for="weight">{BMI_STUFF.weight}</label>
                  <br />
                  <input
                    label="weight"
                    placeholder="LBS:-"
                    id="weight"
                    name="weight"
                    value={weightPounds}
                    onChange={handleWeightChange}
                  ></input>
                </div>
              </form>
            </Formik>
          ) : (
            <div className="calc-results">
              <p>
                {BMI_STUFF.bmi} {bmiResult}
              </p>
              <p>
                {BMI_STUFF.healthResult} {healthStatus}
              </p>
            </div>
          )}
          <div className="bmi-buttons">
            <button onClick={calculateBMI}>{BMI_STUFF.calculatebtn}</button>
            <button onClick={clearResult}>{BMI_STUFF.reloadbtn}</button>
          </div>
        </div>

        <div className="img-contain">
          <img src={BMI_STUFF.bmiPic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BmiCalc;
