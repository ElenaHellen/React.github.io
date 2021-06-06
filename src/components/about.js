import React from "react";

import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";

import Contacts from "./contacts";

class About extends React.Component{
render() {
  return (
 
      <div className="App">
        About us
        <Router>
        <li><Link to = "/contacts">Contacts</Link></li>
        <Switch>
          <Route exact path="/contacts" component={Contacts}></Route>
        </Switch>
        </Router>
      </div>
    
  );
}
}
export default About;
