import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import navigations from "./utils/navigation";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {navigations.map((nav) => {
            return <Route exact path={nav.path} component={nav.component} />;
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;
