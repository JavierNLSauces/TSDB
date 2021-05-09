import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Inicio from "./Inicio";
import tmbd from "./media/tmdb.svg";
import logo from "./media/logo.svg";

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Switch>
          <Route path="/" exact>
          <img id="logo" src={logo} alt="logo"/>
          </Route>
          <Route path="/inicio">
            <Inicio/>
          </Route>
        </Switch>
      </main>
      <footer>
        <address>Javier Nieto Lorenzo</address>
        <img src={tmbd} alt="logo tmdb"/>
      </footer>
    </Router>
  );
}

export default App;
