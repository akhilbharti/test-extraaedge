import React, { Component } from "react";
import Panel from "./Panel";
class Dashboard extends Component {
  render() {
    return (
      <div
        className="ui container"
        style={{
          marginTop: "-333px",
          minHeight: "100vh",
          display: "flex",
          flexFlow: "column nowrap"
        }}
      >
        <div className="ui grid">
          <div className="four wide column">
            <button class="ui orange button">All(143)</button>
          </div>
          <div className="four wide column">
            <button class="ui primary basic button">Online(31)</button>
          </div>
          <div className="four wide column">
            <button class="ui primary basic button">New(3132)</button>
          </div>
          <div className="four wide column">
            <button class="ui primary basic button">Call back(456)</button>
          </div>
          <div className="four wide column">
            <button class="ui primary basic button">Walkin(456)</button>
          </div>
          <div className="four wide column">
            <button class="ui primary basic button">Group(456)</button>
          </div>
          <div className="four wide column">
            <button class="ui primary basic button">wnrolled(456)</button>
          </div>
        </div>
        <div class="ui divider" />
        <Panel />
      </div>
    );
  }
}

export default Dashboard;
