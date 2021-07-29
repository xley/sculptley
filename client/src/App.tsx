import { useRef } from "react";
import "./App.css";
import About from "./pages/About/About";
import Art from "./pages/Art/Art";
import Connect from "./pages/Connect/Connect";
import Home from "./pages/Home/Home";

function App() {
  const scrollToRef = () =>
    connectDiv.current?.scrollIntoView({
      behavior: "smooth",
    });
  const connectDiv = useRef<null | HTMLDivElement>(null);

  return (
    <div className="App">
      <Home scrollTo={scrollToRef} />
      <About scrollTo={scrollToRef} />
      <Art />
      <Connect connectRef={connectDiv} />
    </div>
  );
}

export default App;
