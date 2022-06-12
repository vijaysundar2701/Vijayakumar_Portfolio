import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";
import Home from "./Home";
import Youtube from "./Youtube";
import Notfound from "./Notfound";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/Vijayakumar_Portfolio" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/youtube" component={Youtube} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
