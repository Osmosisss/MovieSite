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
                <br />
                <b>Powers:</b> super strength, flight, invulnerability, super
                speed, heat vision, freeze breath, x-ray vision, superhuman
                hearing, healing factor<br />
                <b>Real Name:</b> Kal-El, Clark Joseph Kent
                <br />
                <b>Alias:</b> Man of Steel
                <br />
                <b>Weekness:</b> Kryptonite
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
                <br />
                <b>Powers:</b> super strength, durability, control over sea
                life, exceptional swimming ability, ability to breathe
                underwater<br />
                <b>Real Name:</b> Arthur Curry
                <br />
                <b>Alias:</b> King of Atlantis
                <br />
                <b>Weekness:</b> Land
              </p>
            </div>
            <div className="profile">
              <a href="https://www.dccomics.com/characters/batman">
                <img src="assets/comedy.jpg" alt="batman" />
              </a>
              <p>
                <b>Comedy</b>
                <br />
                <b>Powers:</b> exceptional martial artist, combat strategy,
                inexhaustible wealth, brilliant deductive skill, advanced
                technology<br />
                <b>Real Name:</b> Bruce Wayne
                <br />
                <b>Alias:</b> Dark Knight, Caped Crusader, Matches Malone
                <br />
                <b>Weekness:</b> Women, people that are close to him
              </p>
            </div>
            <div className="profile">
              <a href="https://www.dccomics.com/characters/wonder-woman">
                <img src="assets/wonder.jpg" alt="wonder woman" />
              </a>
              <p>
                <b>Drama</b>
                <br />
                <b>Powers:</b> super strength, invulnerability, flight, combat
                skill, combat strategy, superhuman agility, healing factor,
                magic weaponry<br />
                <b>Real Name:</b> Diana
                <br />
                <b>Alias:</b> Amazon Princess
                <br />
                <b>Weekness:</b> Guns, Poison
              </p>
            </div>
            <div className="profile">
              <a href="https://www.dccomics.com/characters/the-flash">
                <img src="assets/flash.jpg" alt="the flash" />
              </a>
              <p>
                <b>Horror</b>
                <br />
                <b>Powers:</b> super speed, intangibility, superhuman agility<br />
                <b>Real Name:</b> Barry Allen
                <br />
                <b>Alias:</b> Scarlet Speedster, The Fastest Man Alive
                <br />
                <b>Weekness:</b> Space/Time Manipulation, Cold Temperatures
              </p>
            </div>
            <div className="profile">
              <a href="https://www.dccomics.com/characters/cyborg">
                <img src="assets/cyborg.jpg" alt="cyborg" width="350px" />
              </a>
              <p>
                <b>Suspense</b>
                <br />
                <b>Powers:</b> super strength, advanced technology, instant
                weaponry, genius-level intellect, control over technology,
                computer hacking, durability, teleportation<br />
                <b>Real Name:</b> KVictor "Vic" Stone
                <br />
                <b>Alias:</b> Cyborg
                <br />
                <b>Weekness:</b> Capable of being shut down
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Genres;
