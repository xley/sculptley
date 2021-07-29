import { useRef } from "react";
import "./App.css";
import About from "./pages/About/About";
import Art from "./pages/Art/Art";
import Connect from "./pages/Connect/Connect";
import Home from "./pages/Home/Home";

function App() {
  const scrollToRef = () =>
    connectDiv.current?.scrollIntoView({ behavior: "smooth" });
  // Very fixed way of doing it, wasn't sure how to make it dynamic
  const connectDiv = useRef<null | HTMLDivElement>(null);

  return (
    <div className="App">
      <Home scrollTo={scrollToRef} />
      <About scrollTo={scrollToRef} />
      <Art connectRef={connectDiv} />
      <Connect />
    </div>
  );
}

export default App;
