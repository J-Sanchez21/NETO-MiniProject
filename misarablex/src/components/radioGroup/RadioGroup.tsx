import React from "react";
import "./RadioGroup.css";

const Sports = {
  1: "crossfit",
  2: "weight-lifting",
  3: "hiit",
  4: "running",
  5: "hiking",
  6: "yoga",
  7: "cardio",
  8: "cycling",
  9: "soccer",
  10: "bodybuilding",
  11: "group classes",
  12: "pilates",
  13: "stretching",
  14: "swimming",
};

type ISports = {
  setSelectedSports: React.Dispatch<React.SetStateAction<string[]>>;
};

const RadioGroup = ({ setSelectedSports }: ISports) => {
  console.log(Sports);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    console.log(e.target.value);
    setSelectedSports((arraySports) => {
      if (e.target.checked) {
        return [...arraySports, e.target.value];
      } else {
        return arraySports.filter((sport) => sport != e.target.value);
      }
    });
    // setSelectedSports((selectedSports) => [...selectedSports, value]);
  };

  return (
    <div className="radio-group">
      <h2>Filter by sports:</h2>
      {Object.values(Sports)
        .filter((value) => value)
        .map((sport) => (
          <div className="checkbox-wrapper">
            <input
              id={sport}
              className="substituted"
              type="checkbox"
              name="sportsType"
              value={sport}
              onChange={(e) => handleChange(e)}
            ></input>
            <label htmlFor={sport} className="tgl-btn">
              {sport}
            </label>
          </div>
        ))}
    </div>
  );
};

export default RadioGroup;
