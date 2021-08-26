import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import AddEvents from "./components/AddEvents/AddEvents";


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvents">AddEvents</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          
          </Route>
          <Route path="/addEvents">
          <AddEvents/>
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>

  );
}

export default App;
