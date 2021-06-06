import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import geoSearch from "./geoSearch";

class Contacts extends React.Component{
render() {
  return (
 
      <div className="App">
        Contacts 
        <Router>
        <li> <Link to = "/geoSearch">geoSearch</Link></li>
        <Switch>
          <Route exact path="/geoSearch" component={geoSearch}></Route>
        </Switch>
        </Router>
      </div>
    
  );
}
}
export default Contacts;
