import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dropMenuVisible: false
    }
  }

  toggleDropDown = () => {
    this.setState({
      dropMenuVisible: !this.state.dropMenuVisible
    })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <a className="nav-logo" href="#">Start Bootstrap</a>
          <ul className="nav-menu">
            <a href="#">SERVICES</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">ABOUT</a>
            <a href="#">TEAM</a>
            <a href="#">CONTACT</a>
          </ul>
          <button className="drop-menu" onClick={this.toggleDropDown}>Menu</button>
          {this.state.dropMenuVisible ? (
            <nav className="drop-menu-items">
              <a href="#">SERVICES</a>
              <a href="#">PORTFOLIO</a>
              <a href="#">ABOUT</a>
              <a href="#">TEAM</a>
              <a href="#">CONTACT</a>
            </nav>
          ) : null}
        </header>
        <section className="section-1">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg" alt="Bootstrap" />
        </section>
      </div>
    );
  }
}

export default App;
