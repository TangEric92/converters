import React from "react";

const Inputs = props => {
  const { rates, rate, value, handleInput, handleSelect } = props;

  return (
    <div className="line">
      <input type="number" value={value} onChange={handleInput} />
      <select value={rate} onChange={handleSelect}>
        {Object.keys(rates).map(nameRate => {
          return <option value={nameRate}>{nameRate}</option>;
        })}
      </select>
    </div>
  );
};

export default Inputs;
