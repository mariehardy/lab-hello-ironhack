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
      avatarUrl:'data:image/jpeg;base64,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'
      };
    
    const displayAvartar = (user) => {
      if(user.avatarUrl){
        return <img src={user.avatarUrl} />
      } else {
        return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
      }
    }

    const element = (
      <h2>
        Hello, {formatName(user)}!

      </h2>
    );

    return (
      <div className="App">
      
      <div className="test">
        {element}
        {displayAvartar(user)}
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