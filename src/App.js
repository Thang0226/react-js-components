import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import AddComponent from "./components/AddComponent";
import AddFncComponent from "./components/AddFncComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome name="Thang"/>
        <AddComponent firstNumber={1} secondNumber={2} />
        <AddFncComponent firstNumber={3} secondNumber="4" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
