import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./about";

class Home extends React.Component{
render() {
  return (
 
      <div className="App">
        Hello! It's Home Page
        <Router>
        <li> <Link to = "/about">About</Link></li>
        <Switch>
          
          <Route exact path="/about" component={About}></Route>
          
        </Switch>
        </Router>
      </div>
    
  );
}
}
export default Home;
