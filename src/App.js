import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch,  Route, Redirect} from "react-router-dom";

import Home from "./containers/homeContainer"
import Login from "./containers/loginContainer"
import About from "./containers/aboutContainer"
import Contacts from "./containers/contactsContainer"
import GeoSearch from "./containers/geoSearchContainer"
import Profile from "./containers/profileContainer"
import Maps from "./containers/mapContainer"


import { root, about, contacts, profile,  geoSearch, login, map } from "./AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={login} component={Login} />
          <Route path={about} component={About} />
          <Route path={contacts} component={Contacts} />
          <Route path={geoSearch} component={GeoSearch} />
          <Route path={profile} component={Profile} />
          <Route path={map} component={Maps} />
          <Route path={root} component={Home} />
          <Redirect to={root} />
        </Switch>
      </div>
    </Router>
    
  );
}
export default App;
