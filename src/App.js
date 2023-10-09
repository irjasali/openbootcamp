import logo from "./logo.svg";
import "./App.css";
import Gretting from "./components/pure/gretting";
import Saludo from "./components/pure/saludo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Gretting name="Irving" />
          <Saludo nombre="Wallace" edad={25} />
        </p>
      </header>
    </div>
  );
}

export default App;
