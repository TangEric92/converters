import React, { useState } from "react";
import Inputs from "./Inputs";

function Converter(props) {
  const { ratio, initialFrom, initialTo } = props;

  const [fromRate, setFromRate] = useState(initialFrom);
  const [toRate, setToRate] = useState(initialTo);

  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const handleFirstInput = event => {
    const fromVal = parseFloat(event.target.value); // On recupere la nouvelle valeur de l'input
    setFirstValue(fromVal); // On met a jour le state associé à l'input
    const rate = ratio[toRate] / ratio[fromRate]; // Calcul du taux
    const toVal = Math.round(fromVal * rate * 100) / 100; // On garde 2 nombres apres la virgule
    setSecondValue(toVal); // On met a jour la valeur du second input avec le bon taux
  };

  const handleSecondInput = event => {
    const toVal = parseFloat(event.target.value); // recuperer la valeur de l'input
    setSecondValue(toVal); // update de la valeur du second input
    const rate = ratio[toRate] / ratio[fromRate]; // Calculer le taux
    const fromVal = Math.round((toVal / rate) * 100) / 100; // On applique le taux sur la valeur du 1ere input
    setFirstValue(fromVal); // On set le 1er input a la nouvelle valeur
  };

  const handleFirstSelect = event => {
    const fromRate = event.target.value; // Nouveau taux a stocker
    setFromRate(fromRate); // On met a jour le 1er taux (select)
    const rate = ratio[toRate] / ratio[fromRate]; // Calcul du taux
    const toVal = Math.round(firstValue * rate * 100) / 100; // on applique le nouveau a la valeur du 2eme input
    setSecondValue(toVal); // On met a jour la valeur du second input avec le bon taux
  };

  const handleSecondSelect = event => {
    const toRate = event.target.value; // Nouveau taux a stocker
    setToRate(toRate); // On met a jour le 2eme taux (select)
    const rate = ratio[toRate] / ratio[fromRate]; // Calcul du taux
    const toVal = Math.round(firstValue * rate * 100) / 100; // on applique le nouveau a la valeur du 1er input
    setSecondValue(toVal); // On met a jour la valeur du second input avec le bon taux
  };

  return (
    <>
      <Inputs
        value={firstValue}
        handleInput={handleFirstInput}
        rate={fromRate}
        rates={ratio}
        handleSelect={handleFirstSelect}
      />
      <span className="down" role="img" aria-label="down-arrow">
        ⬇️&nbsp;⬆️
      </span>
      <Inputs
        value={secondValue}
        handleInput={handleSecondInput}
        rate={toRate}
        rates={ratio}
        handleSelect={handleSecondSelect}
      />
    </>
  );
}

export default Converter;
