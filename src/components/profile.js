import React from "react";
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";

import Login from "./login";

class Profile extends React.Component{
render() {
  return (
 
      <div className="App">
        Hello!
        <Router>      
       <li> <Link to = "/login">Login</Link></li>
        <Switch>
          <Route exact path="/login" component={Login}></Route> 
        </Switch>
      
      </Router>

      </div>
    
  );
}
}
export default Profile;
