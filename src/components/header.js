import React, { Component } from "react";

import AnimateHeight from "react-animate-height";

class Header extends Component {
  constructor() {
    super();

    this.closeSlideMenu = this.closeSlideMenu.bind(this);

    this.state = {
      height: 0,
      width: 0
    };
  }

  openWithReactAnimateHeight = () => {
    if (this.state.height == 0) {
      this.setState({ height: 113 });
    } else {
      this.setState({ height: 0 });
    }
  };

  closeSlideMenu = () => {
    "side-menu".classList.remove("open");
    console.log("whats good");
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <span className="open-slide">
            <a href="#" onClick={() => this.openWithReactAnimateHeight()}>
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
                <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
                <path d="M0,23 30,26" stroke="#fff" stroke-width="5" />
              </svg>
            </a>
          </span>
        </nav>
        <div className="side-menu" className="side-nav">
          <div className="pic2">
            <a
              href="#"
              className="btn-close"
              onClick={() => this.closeSlideMenu()}
            >
              &times;
            </a>
          </div>
        </div>
        <AnimateHeight duration={700} height={this.state.height}>
          <div className="main" className="side-bar">
            <a href="#">Home</a>
            <a href="./hero.js">Super-Heroes</a>
            <a href="#">Villains</a>
          </div>
        </AnimateHeight>
      </div>
    );
  }
}

export default Header;
