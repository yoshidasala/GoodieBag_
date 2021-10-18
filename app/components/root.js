import React from "react";
import Candies from "./Candies";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import SingleCandy from "./SingleCandy";
import Home from "./Home";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <button className='candybutton'>
              <Link to='/'> HOME</Link>
            </button>
          </div>
          <div>
            <button className='candybutton'>
              <Link to='/candies'> SEE ALL CANDIES</Link>
            </button>
          </div>
        </nav>
        <div></div>
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/candies' component={Candies} />
          <Route exact path='/candies/:candyId' component={SingleCandy} />
        </main>
      </div>
    </Router>
  );
};

export default Root;
