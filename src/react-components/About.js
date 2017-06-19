import React from 'react';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
console.log(history);

const About = (props) => {
  
  return (
    <div>
      <h1> ABout PAge! </h1>
      <button onClick={history.goBack}>Go Back</button>
    </div>
  );
}

export default About;
