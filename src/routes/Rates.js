import React, { useState } from "react";
import Inputs from "../components/Inputs";

const rates = {
  AED: 4.184818,
  AFN: 86.247717,
  ALL: 124.299351,
  AMD: 555.280849,
  ANG: 2.047576,
  AOA: 356.763633,
  ARS: 42.38933,
  AUD: 1.602319,
  AWG: 2.051051,
  AZN: 1.939629,
  BAM: 1.953472,
  BBD: 2.272015,
  BDT: 95.763572,
  BGN: 1.956037,
  BHD: 0.429538,
  BIF: 2050.766453,
  BMD: 1.139283,
  BND: 1.543044,
  BOB: 7.88287,
  BRL: 4.180783,
  BSD: 1.140736,
  BTC: 0.000336,
  BTN: 81.546963,
  BWP: 11.796704,
  BYN: 2.460394,
  BYR: 22329.947764,
  BZD: 2.299472,
  CAD: 1.499125,
  CDF: 1857.031242,
  CHF: 1.138824,
  CLF: 0.028536,
  CLP: 742.238426,
  CNY: 7.684234,
  COP: 3522.321403,
  CRC: 699.212486,
  CUC: 1.139283,
  CUP: 30.191001,
  CVE: 110.139028,
  CZK: 25.712708,
  DJF: 202.473517,
  DKK: 7.465096,
  DOP: 57.581075,
  DZD: 134.851216,
  EGP: 20.109824,
  ERN: 17.088816,
  ETB: 32.041765,
  EUR: 1,
  FJD: 2.408674,
  FKP: 0.877578,
  GBP: 0.879872,
  GEL: 3.013403,
  GGP: 0.879738,
  GHS: 5.952925,
  GIP: 0.877491,
  GMD: 56.45132,
  GNF: 10401.084744,
  GTQ: 8.862767,
  GYD: 238.195589,
  HKD: 8.93894,
  HNL: 27.843857,
  HRK: 7.409785,
  HTG: 88.942718,
  HUF: 317.81482,
  IDR: 15879.668924,
  ILS: 4.117882,
  IMP: 0.879738,
  INR: 81.532739,
  IQD: 1356.886112,
  IRR: 47969.512762,
  ISK: 137.010169,
  JEP: 0.879738,
  JMD: 155.8885,
  JOD: 0.808432,
  JPY: 125.04942,
  KES: 113.973974,
  KGS: 79.517853,
  KHR: 4587.722603,
  KMF: 491.771316,
  KPW: 1025.392464,
  KRW: 1276.167821,
  KWD: 0.345875,
  KYD: 0.950669,
  KZT: 430.625806,
  LAK: 9768.611398,
  LBP: 1720.374179,
  LKR: 203.350449,
  LRD: 183.42479,
  LSL: 15.231866,
  LTL: 3.364007,
  LVL: 0.689141,
  LYD: 1.578364,
  MAD: 10.878901,
  MDL: 19.478891,
  MGA: 3986.635952,
  MKD: 61.486986,
  MMK: 1734.571161,
  MNT: 2990.223818,
  MOP: 9.217996,
  MRO: 406.723569,
  MUR: 38.794299,
  MVR: 17.601712,
  MWK: 832.445672,
  MXN: 21.722143,
  MYR: 4.646004,
  MZN: 70.060952,
  NAD: 15.232383,
  NGN: 414.106517,
  NIO: 37.437123,
  NOK: 9.686641,
  NPR: 130.408025,
  NZD: 1.661103,
  OMR: 0.43863,
  PAB: 1.140747,
  PEN: 3.787542,
  PGK: 3.844226,
  PHP: 59.585074,
  PKR: 158.189385,
  PLN: 4.290201,
  PYG: 6878.022385,
  QAR: 4.148102,
  RON: 4.742266,
  RSD: 118.428635,
  RUB: 74.751892,
  RWF: 1023.281249,
  SAR: 4.272653,
  SBD: 9.123611,
  SCR: 15.551781,
  SDG: 54.309051,
  SEK: 10.403245,
  SGD: 1.541906,
  SHP: 1.504882,
  SLL: 9786.441293,
  SOS: 661.923474,
  SRD: 8.496811,
  STD: 23982.591311,
  SVC: 9.981148,
  SYP: 586.731152,
  SZL: 15.232191,
  THB: 35.653879,
  TJS: 10.766438,
  TMT: 3.987491,
  TND: 3.45768,
  TOP: 2.563444,
  TRY: 5.934862,
  TTD: 7.723653,
  TWD: 35.0734,
  TZS: 2646.896771,
  UAH: 31.011973,
  UGX: 4192.390597,
  USD: 1.139283,
  UYU: 37.07002,
  UZS: 9584.440984,
  VEF: 11.37859,
  VND: 26436.493515,
  VUV: 128.711692,
  WST: 2.949871,
  XAF: 655.178677,
  XAG: 0.072097,
  XAU: 0.000867,
  XCD: 3.07897,
  XDR: 0.81753,
  XOF: 655.178758,
  XPF: 119.123942,
  YER: 285.219203,
  ZAR: 15.292714,
  ZMK: 10254.919207,
  ZMW: 13.587065,
  ZWL: 367.2536
};

const Rates = props => {
  const [fromRate, setFromRate] = useState("EUR");
  const [toRate, setToRate] = useState("USD");
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const handleFirstInput = event => {
    const fromVal = parseFloat(event.target.value); // On recupere la nouvelle valeur de l'input
    setFirstValue(fromVal); // On met a jour le state associé à l'input
    const rate = rates[toRate] / rates[fromRate]; // Calcul du taux
    const toVal = Math.round(fromVal * rate * 100) / 100; // On garde 2 nombres apres la virgule
    setSecondValue(toVal); // On met a jour la valeur du second input avec le bon taux
  };

  const handleSecondInput = event => {
    const toVal = parseFloat(event.target.value); // recuperer la valeur de l'input
    setSecondValue(toVal); // update de la valeur du second input
    const rate = rates[toRate] / rates[fromRate]; // Calculer le taux
    const fromVal = Math.round((toVal / rate) * 100) / 100; // On applique le taux sur la valeur du 1ere input
    setFirstValue(fromVal); // On set le 1er input a la nouvelle valeur
  };

  const handleFirstSelect = event => {
    const fromRate = event.target.value; // Nouveau taux a stocker
    setFromRate(fromRate); // On met a jour le 1er taux (select)
    const rate = rates[toRate] / rates[fromRate]; // Calcul du taux
    const toVal = Math.round(firstValue * rate * 100) / 100; // on applique le nouveau a la valeur du 2eme input
    setSecondValue(toVal); // On met a jour la valeur du second input avec le bon taux
  };

  const handleSecondSelect = event => {
    const toRate = event.target.value; // Nouveau taux a stocker
    setToRate(toRate); // On met a jour le 2eme taux (select)
    const rate = rates[toRate] / rates[fromRate]; // Calcul du taux
    const toVal = Math.round(firstValue * rate * 100) / 100; // on applique le nouveau a la valeur du 1er input
    setSecondValue(toVal); // On met a jour la valeur du second input avec le bon taux
  };

  return (
    <>
      <h1>
        <span role="img" aria-label="money">
          💵
        </span>
        Converter
        <span role="img" aria-label="money">
          💵
        </span>
      </h1>
      <Inputs
        value={firstValue}
        handleInput={handleFirstInput}
        rate={fromRate}
        rates={rates}
        handleSelect={handleFirstSelect}
      />
      <span className="down" role="img" aria-label="down-arrow">
        ⬇️&nbsp;⬆️
      </span>
      <Inputs
        value={secondValue}
        handleInput={handleSecondInput}
        rate={toRate}
        rates={rates}
        handleSelect={handleSecondSelect}
      />
    </>
  );
};

export default Rates;
