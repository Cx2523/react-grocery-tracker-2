import React from 'react';
import ItemsContainer from './Items/ItemsContainer.js';

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
      <ItemsContainer items={this.state.items} createNewItem={this.createNewItem} />
    );
  }
}

export default App;
