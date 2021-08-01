import { useRef } from "react";
import About from "../../sections/About/About";
import Art from "../../sections/Art/Art";
import Connect from "../../sections/Connect/Connect";
import Landing from "../../sections/Landing/Landing";
// @ts-ignore
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function Home() {
  const scrollToRef = () =>
    connectDiv.current?.scrollIntoView({
      behavior: "smooth",
    });
  const connectDiv = useRef<null | HTMLDivElement>(null);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Home">
            <Landing scrollTo={scrollToRef} />
            <About scrollTo={scrollToRef} />
            <Art />
            <Connect connectRef={connectDiv} />
          </Route>
          <Route path="/Art">
            <Art />
          </Route>
          <Route path="/">
            <Redirect to="/Home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
