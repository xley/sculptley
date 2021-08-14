import "./App.css";
import Home from "./pages/Home/Home";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArtPiece from "./pages/ArtPieces/ArtPiece/ArtPiece";

toast.configure();
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/art">
          <ArtPiece />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
