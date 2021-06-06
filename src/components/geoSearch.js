import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Map from "./map"

class geoSearch extends React.Component{
render() {
  return (
 
      <div className="App">
        geoSearch

        <Router>
      
     <li> <Link to = "/map">Map</Link></li>
    
        <Switch>
          
          <Route exact path="/map" component={Map}></Route>
        </Switch>
      
      </Router>
      </div>
    
  );
}
}
export default geoSearch;
