import "./App.css";
import Nav from "./components/Nav";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
