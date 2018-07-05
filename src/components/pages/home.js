import React, { Component } from "react";

import Header from "../header";
import Genres from "../genres";


export default class Home extends Component {
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
