import logo from "./logo.svg";
import "./App.css";
import RouterComp from "./Components/router";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        {/* <h1>React-router form</h1> */}

        <RouterComp />
      </header>
    </div>
  );
}

export default App;
