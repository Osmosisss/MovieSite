import React, { Component } from "react";

class Genres extends Component {
  render() {
    return (
      <div className="main">
        <div className="agg">
          <div className="image">
            <a href="#">
            <div className='action'>
              <h1>Action</h1>
            </div>
              <img src="assets/scottyboi.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="agg">
          <div className="image">
            <a href="#">
            <div className='adventure'>
              <h1>Adventure</h1>
            </div>
              <img src="assets/thegoonies.png" alt="adventure" />
            </a>
          </div>
        </div>
        <div className="agg">
          <div className="image">
            <a href="#">
            <div className='comedy'>
              <h1>Comedy</h1>
            </div>
              <img src="assets/clerksposter.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Genres;
