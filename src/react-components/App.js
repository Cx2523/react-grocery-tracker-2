import React from 'react';
// import ItemsContainer from './Items/ItemsContainer.js';
import NewItemInput from './Items/NewItemInput.js';
import { Grid } from 'semantic-ui-react';

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
      <NewItemInput />
    );
  }
}

export default App;
