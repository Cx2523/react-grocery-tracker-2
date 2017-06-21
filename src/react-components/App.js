import React from 'react';
import ItemsContainer from './Items/ItemsContainer.js';
// import NewItemInput from './Items/NewItemInput.js';
import { Grid } from 'semantic-ui-react';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      items: [],
      lists: [],
      stats: {}
    };
    this.createNewItem = this.createNewItem.bind(this);
  }

  createNewItem(item){
    const newItemSet = this.state.items.map((item) => item);
    newItemSet.push(item);
    this.setState({items: newItemSet});
  }

  render(){
    return(
      <ItemsContainer createNewItem={this.createNewItem} />
    );
  }
}

export default App;
