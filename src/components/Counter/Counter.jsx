import React, { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const contador = useCounter();

  //Funciones para Incremento, Decremento y Reset del Contador
  const increment = () => {
    contador.increment(contador.count);
  };
  const decrement = () => {
    contador.decrement(contador.count);
  };
  const reset = () => {
    contador.reset(contador.count);
  };

  //Funciones para los eventos OnChange de los Inputs
  const initImput = (e) => {
    contador.setInitValue(parseInt(e.target.value));
  };

  const stepImput = (e) => {
    contador.setStep(parseInt(e.target.value));
  };

  const minImput = (e) => {
    if (e.target.value === "") {
      contador.setMin(undefined);
    } else {
      contador.setMin(parseInt(e.target.value));
    }
  };

  const maxImput = (e) => {
    if (e.target.value === "") {
      contador.setMax(undefined);
    } else {
      contador.setMax(parseInt(e.target.value));
    }
  };

  return (
    <div>
      <h1>Ejercicio 1: Contador</h1>
      <p>Valor contador: {contador.init}</p>
      <div className={"form-floating mb-3"}>
        <input
          type={"number"}
          value={contador.initValue}
          className={"form-control"}
          id={"init"}
          onChange={initImput}
        ></input>
        <label htmlFor={"init"} style={{ color: "#333333", fontSize: "16px" }}>
          Valor inicial
        </label>
      </div>
      <div className="form-floating mb-3">
        <input
          type={"number"}
          value={contador.step}
          className={"form-control"}
          id={"step"}
          onChange={stepImput}
        ></input>
        <label htmlFor={"step"} style={{ color: "#333333", fontSize: "16px" }}>
          Step
        </label>
      </div>
      <div className="form-floating mb-3">
        <input
          type={"number"}
          value={contador.min}
          className={"form-control"}
          id={"min"}
          onChange={minImput}
        ></input>
        <label htmlFor={"min"} style={{ color: "#333333", fontSize: "16px" }}>
          Valor mínimo opcional
        </label>
      </div>
      <div className="form-floating mb-3">
        <input
          type={"number"}
          value={contador.max}
          className={"form-control"}
          id={"max"}
          onChange={maxImput}
        ></input>
        <label htmlFor={"max"} style={{ color: "#333333", fontSize: "16px" }}>
          Valor máximo opcional
        </label>
      </div>
      <div>
        <button onClick={increment} className={"btn btn-outline-secondary m-3"}>
          Increment
        </button>
        <button onClick={decrement} className={"btn btn-outline-secondary m-3"}>
          Decrement
        </button>
        <button onClick={reset} className={"btn btn-outline-secondary m-3"}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
