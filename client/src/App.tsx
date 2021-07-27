import "./App.css";
import About from "./pages/About/About";
import Art from "./pages/Art/Art";
import Connect from "./pages/Connect/Connect";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Art />
      <Connect />
    </div>
  );
}

export default App;
