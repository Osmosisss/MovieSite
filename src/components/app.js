import React, { Component } from "react";
import Header from "./header";
import Genres from "./genres";
import Main from "./main";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Genres />
        {/* <Main /> */}
      </div>
    );
  }
}
