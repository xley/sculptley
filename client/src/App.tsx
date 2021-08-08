import "./App.css";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TestArtPiece from "./pages/ArtPieces/TestArtPiece/TestArtPiece";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Art">
          <TestArtPiece />
        </Route>
        <Route path="/">
          <Redirect to="/Home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
