import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  // Parámetros iniciales solicitados por el useCounter
  // useCounter(Valor inicial del contador, Valor otorgado al Incremento / Decremento (Step), Valor mínimo a decrementar, Valor máximo a incrementar)
  const contador = useCounter(0, 1, undefined, 5);

  // Valor inicial al Contador que hará uso de la configuración de useCounter
  let inicialValue = 0;

  const [counter, setCounter] = useState(inicialValue);

  const increment = () => {
    contador.increment(counter);
    setCounter(inicialValue);
  };
  const decrement = () => {
    contador.decrement(counter);
    setCounter(inicialValue);
  };
  const reset = () => {
    contador.reset(counter);
  };

  return (
    <div>
      <h1>Ejercicio 1: Contador</h1>
      <p>Valor contador: {contador.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
