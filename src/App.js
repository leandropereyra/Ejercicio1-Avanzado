import "./App.css";
import Tasklist from "./components/lists/TaskList";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <br />
        <br />
        <Tasklist />
      </header>
    </div>
  );
}

export default App;
