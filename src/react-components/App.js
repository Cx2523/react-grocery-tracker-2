import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      items: {},
      lists: {},
      stats: {}
    };
  }

  render(){
    return(
      <h1>App</h1>
    );
  }
}

export default App;
