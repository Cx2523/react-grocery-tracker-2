import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Layout from './Layout.js';
import About from './About.js';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Layout} />
        <Route path="/about" component={About}/>
      </div>
    </Router>
  );
}

export default Routes;
