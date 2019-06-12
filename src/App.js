import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import leadList from "./leadList";
import Header from "./Header.js";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import "./App.css";
import history from "./history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Navbar />
        <Header />

        <Switch>
          <Route path="/" exact component={leadList} />
          <Route path="/upcoming-task" />
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/my-activities" exact />
          <Route path="/fail-leads" />
          <Route path="/campaign" />
          <Route path="/chat-list" />
          <Route path="/reports" />
          <Route path="/settings" />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
