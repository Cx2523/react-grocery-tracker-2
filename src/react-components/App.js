import React from 'react';
import ItemsContainer from './Items/ItemsContainer.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ListItemPage from './ListItemPage.js';
import StatsPage from './StatsPage.js';
import AboutPage from './AboutPage.js';
import Navbar from './Navbar.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      items: [],
      lists: [],
      stats: {},
      idCounter: 1,
      currentItem: {
        name: '',
        cost: '',
        desc: '',
        id: ''
      }
    };
    this.createNewItem = this.createNewItem.bind(this);
    this.getItemById = this.getItemById.bind(this);
    this.updateExistingItem = this.updateExistingItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  componentDidMount(){
    if(Object.keys(localStorage).some((key) => key === 'reactGroceryTrackerData')){
      console.log("A saved state exists");
      const savedState = JSON.parse(localStorage.reactGroceryTrackerData);
      this.setState(savedState);
    }
  }

  componentDidUpdate(prevProps, prevState){
    localStorage.setItem('reactGroceryTrackerData', JSON.stringify(this.state));
  }

  createNewItem(item){
    const newItemSet = this.state.items.map((item) => item);
    item.id = this.state.idCounter;
    this.state.idCounter++;
    newItemSet.push(item);
    this.setState({items: newItemSet});
  }

  updateExistingItem(updatedItem){
    //create a new array with updated item.
    let newItemSet = this.state.items.map((item) => {
      if (updatedItem.id === item.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    this.setState({items: newItemSet, currentItem: Object.assign({}, {
      name: '',
      cost: '',
      desc: '',
      id: ''
    })});
  }

  getItemById(id){
    //find item by id on state
    let item = this.state.items.find((item) => {
        return item.id === id;
    });
    this.setState({currentItem: Object.assign({}, item)});
  }

  deleteItem(id){
    let modifiedItemList = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({items: modifiedItemList, currentItem: Object.assign({}, {
      name: '',
      cost: '',
      desc: '',
      id: ''
    })});
  }

  clearInput(){
    this.setState({currentItem: Object.assign({}, {
      name: '',
      cost: '',
      desc: '',
      id: ''
    })});
  }

  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <div>
            <Route exact path="/"
              render={() => <ListItemPage
                stateData={this.state}
                createNewItem={this.createNewItem}
                getItemById={this.getItemById}
                editItem={this.state.currentItem}
                updateExistingItem={this.updateExistingItem}
                deleteItem={this.deleteItem}
                clearInput={this.clearInput}
                />}
              />
            <Route path="/stats" component={StatsPage} />
            <Route path="/about" component={AboutPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
