import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";

import Home from "../src/components/Home"

class App extends React.Component{
render() {
  return (
    <Router>
      <div className="App">
        <li><Link to = "/">Home</Link></li>
        <Switch>
          <Route exact path="/" component={Home}></Route>          
        </Switch>
      </div>
      </Router>
  );
}
}
export default App;
