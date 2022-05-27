import useCounter from "../hooks/useCounter";

const Counter = () => {
  const contador = useCounter();

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
          onChange={contador.initInput}
        />
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
          onChange={contador.stepInput}
        />
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
          onChange={contador.minInput}
        />
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
          onChange={contador.maxInput}
        />
        <label htmlFor={"max"} style={{ color: "#333333", fontSize: "16px" }}>
          Valor máximo opcional
        </label>
      </div>
      <div>
        <button
          onClick={contador.set}
          className={"btn btn-outline-secondary m-3"}
        >
          Set values
        </button>
        <button
          onClick={contador.increment}
          className={"btn btn-outline-secondary m-3"}
        >
          Increment
        </button>
        <button
          onClick={contador.decrement}
          className={"btn btn-outline-secondary m-3"}
        >
          Decrement
        </button>
        <button
          onClick={contador.reset}
          className={"btn btn-outline-secondary m-3"}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
