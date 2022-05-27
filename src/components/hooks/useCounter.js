import { useState } from "react";

const useCounter = () => {
  const [initValue, setInitValue] = useState(0);
  const [init, setInit] = useState(initValue);
  const [step, setStep] = useState(undefined);
  const [min, setMin] = useState(Number.NEGATIVE_INFINITY);
  const [max, setMax] = useState(Number.POSITIVE_INFINITY);

  // Aumentar el valor
  const increment = () => {
    if (init + step <= max) {
      setInit(init + step);
    }
  };

  //Decrementar valor
  const decrement = () => {
    if (init - step >= min) {
      setInit(init - step);
    }
  };

  //Settear valores iniciales
  const set = () => {
    setInit(initValue);
  };

  //Resetear valores
  const reset = () => {
    setInit(0);
  };

  //Funciones para los eventos OnChange de los Inputs
  const initInput = (e) => {
    setInitValue(parseInt(e.target.value));
  };

  const stepInput = (e) => {
    setStep(parseInt(e.target.value));
  };

  const minInput = (e) => {
    if (e.target.value === "") {
      setMin(undefined);
    } else {
      setMin(parseInt(e.target.value));
    }
  };

  const maxInput = (e) => {
    if (e.target.value === "") {
      setMax(undefined);
    } else {
      setMax(parseInt(e.target.value));
    }
  };

  //Variable y funciones que se retornan para que sean funciones del Hook
  return {
    initValue,
    init,
    step,
    min,
    max,
    setInitValue,
    increment,
    decrement,
    reset,
    set,
    setStep,
    setInit,
    setMin,
    setMax,
    initInput,
    stepInput,
    minInput,
    maxInput,
  };
};

export default useCounter;
