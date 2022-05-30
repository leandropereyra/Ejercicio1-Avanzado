import './App.css';
import Tasklist from './components/lists/TaskList';
// import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
        <Tasklist/>
      </header>
    </div>
  );
}

export default App;
