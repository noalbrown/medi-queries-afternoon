import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
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
          <button className="drop-menu">Menu</button>
        </header>
        <section className="section-1">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg" alt="Bootstrap" />
        </section>
      </div>
    );
  }
}

export default App;
