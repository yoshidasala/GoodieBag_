import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <main>
        <div className='main'>
          <h1 className='welcome'>WELCOME TO THE GOODIE BAG</h1>
          <img className='candyjar' src='candy store.png' alt='candy' />

        </div>
      </main>
    );
  }
}

export default Home;
