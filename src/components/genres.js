import React, { Component } from "react";

class Genres extends Component {
  render() {
    return (
      <div className="hero-page">
        <div className="wrapper">
          <div className="columns">
            <div className="profile">
              <a href="https://www.dccomics.com/characters/superman">
                <img src="assets/action.jpg" alt="action" />
              </a>
              <p>
                <b>Action</b>
              </p>
            </div>
            <div className="profile">
              <a href="https://www.dccomics.com/characters/aquaman">
                <img
                  src="assets/adventure.jpg"
                  alt="adventure"
                  width="200px"
                  height="200px"
                />
              </a>
              <p>
                <b>Adventure</b>
              </p>
            </div>
            <div className="profile">
              <a href="https://www.dccomics.com/characters/batman">
                <img src="assets/comedy.jpg" alt="batman" />
              </a>
              <p>
                <b>Comedy</b>
              </p>
            </div>
            <div className="profile">
              <a href="https://www.dccomics.com/characters/wonder-woman">
                <img
                  src="assets/drama.jpeg"
                  alt="wonder woman"
                  width="200px"
                  height="200px"
                />
              </a>
              <p>
                <b>Drama</b>
              </p>
            </div>
            <div className="profile">
              <a href="https://www.dccomics.com/characters/the-flash">
                <img src="assets/horror.jpg" alt="the flash" />
              </a>
              <p>
                <b>Horror</b>
              </p>
            </div>
            <div className="profile">
              <a href="https://www.dccomics.com/characters/cyborg">
                <img
                  src="assets/suspense.jpeg"
                  alt="cyborg"
                  width="200px"
                  height="200px"
                />
              </a>
              <p>
                <b>Suspense</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Genres;
