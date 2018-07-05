import React, { Component } from "react";

class Genres extends Component {
  render() {
    return (
      <div className="main">
        <div className="agg">
          <div className="image">
            <a href="#">
              <img src="assets/action.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="agg">
          <div className="image">
            <a href="#">
              <img src="assets/adventure.jpg" alt="adventure" />
            </a>
          </div>
        </div>
        <div className="agg">
          <div className="image">
            <a href="#">
              <img src="assets/comedy.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Genres;
