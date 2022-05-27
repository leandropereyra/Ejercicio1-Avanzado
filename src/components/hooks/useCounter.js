import { useState } from "react";

const useCounter = () => {
  const [initValue, setInitValue] = useState(0);
  const [init, setInit] = useState(initValue);

  //Step para agregar el valor de Incremento / Decremento
  const [step, setStep] = useState(undefined);  
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  // Aumentar el valor
  const increment = () => {
    if (init + step <= max) {
      setInit(init + step);}
  };

  //Decrementar valor
  const decrement = () => {
    if (init - step >= min) {
      setInit(init - step);
    }
  };

  //Restaurar valor inicial
  const reset = () => {
    setInit(0);
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
    setStep,
    setInit,
    setMin,
    setMax
  };
};

export default useCounter;
