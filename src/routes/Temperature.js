import React from "react";
import { Converter, Title } from "../components/";

const temperatures = {
  celcius: 1.0,
  fahrenheit: 33.8,
  kelvin: 274.15
};

const Temperature = () => {
  return (
    <>
      <Title title="Temperature Converter" emoji="💵" />
      <Converter
        initialFrom={"celcius"}
        initialTo={"kelvin"}
        ratio={temperatures}
      />
    </>
  );
};

export default Temperature;
