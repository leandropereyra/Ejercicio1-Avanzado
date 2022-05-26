import { useState } from "react";

const useCounter = (initialCounter, initialStep, minValue, maxValue) => {
  const [count, setCount] = useState(initialCounter);

  //Step para agregar el valor de Incremento / Decremento
  const [step] = useState(initialStep);

  // Aumentar el valor
  const increment = () => {
    if (count + step <= minValue) {
      setCount(count + step);
    }
    return;
  };

  //Decrementar valor
  const decrement = () => {
    if (count - step >= maxValue) {
      setCount(count - step);
    }
    return;
  };

  //Restaurar valor inicial
  const reset = () => {
    setCount(0);
  };

  //Variable y funciones que se dan para que se haga uso del Hook
  return {
    count,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
