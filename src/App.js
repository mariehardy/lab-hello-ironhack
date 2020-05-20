import React, { Component } from "react";
import "./App.css";
 
class App extends Component {
  render() {

    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    }
   
    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl: ''
    };
    
    const element = (
      <h2>
        Hello, {formatName(user)}!
      </h2>
    );

    return (
      <div className="App">
      
      <div className="test">
        {element}
      </div>


      <div className="navbar">
      <img src="/images/ironhack-logo.svg" height="70px" alt="" />
      
      <img src="/images/menu-top.svg" height="70px" className="menu" alt="" />
      </div>


        <div className="main-top">
        <h1>Say Hello to<br />
        ReactJS</h1>
        <h2>You will learn a Frontend<br /> framework from scratch</h2>
        <a href="#" class="btn-awesome">Awesome</a>
        </div>
        <div className="main-bottom">
            <ul className="icon-container">
                <li><img src="/images/icon1.png" alt="" /></li>
                <li><h4>Declarative</h4></li>
                <li><p>React makes it painless to create interactive UIs.</p></li>
            </ul>
            <ul className="icon-container">
                <li><img src="/images/icon2.png" alt="" /></li>
                <li><h4>Declarative</h4></li>
                <li><p>React makes it painless to create interactive UIs.</p></li>
            </ul>
            <ul className="icon-container">
                <li><img src="/images/icon3.png" alt="" /></li>
                <li><h4>Declarative</h4></li>
                <li><p>React makes it painless to create interactive UIs.</p></li>
            </ul>
            <ul className="icon-container">
                <li><img src="/images/icon4.png" alt="" /></li>
                <li><h4>Declarative</h4></li>
                <li><p>React makes it painless to create interactive UIs.</p></li>
            </ul>
        </div>

      </div>
    );
  }
}
 
export default App;