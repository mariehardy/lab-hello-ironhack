import React, { Component } from "react";
import "./App.css";
 
class App extends Component {
  render() {
    return (
      <div className="App">
      
      <div className="navbar">
          <logo></logo>
          <collapsed></collapsed>
      </div>

      <div className="main">
        <div className="main-top">
        <h1>Say Hello to<br />
        ReactJS</h1>
        <h2>You will learn a Frontend<br /> framework from scratch</h2>
        </div>
        <div className="main-bottom">
            <ul className="icon-container">
                <li><img src="/images/icon1.png" alt="" /></li>
                <li><h4>Declarative</h4></li>
                <li><p>React makes it painless to create interactive UIs.</p></li>
            </ul>
        </div>
      </div>

      </div>
    );
  }
}
 
export default App;