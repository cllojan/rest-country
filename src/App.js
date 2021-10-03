import "./App.css";
import Navbar from "./components/Navbar";
import Country from "./components/Country";
import CardCountry from "./components/CardCountry";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/:region/:handle">
          <CardCountry />
        </Route>
        <Route path="/">
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
