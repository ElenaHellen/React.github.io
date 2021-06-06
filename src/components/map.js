import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./profile";

class Map extends React.Component{
render() {
  return (
 
      <div className="App">
        Map 
        <Router>
      <div className="App">
        
       <li> <Link to = "/profile">Profile</Link></li>
       
        <Switch>
          
          <Route exact path="/profile" component={Profile}></Route>
         
        </Switch>
      </div>
      </Router>
  
      </div>
    
  );
}
}
export default Map;
