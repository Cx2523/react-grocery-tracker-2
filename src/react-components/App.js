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
      shoppingLists: [],
      stats: {},
      idCounter: 1,
      currentItem: {
        name: '',
        cost: '',
        desc: '',
        id: ''
      },
      currentShoppingList: {
        list: [],
        timeStamp: '',
        name: ''
      },
      deleting: false,
      editing: false
    };
    this.createNewItem = this.createNewItem.bind(this);
    this.getItemById = this.getItemById.bind(this);
    this.updateExistingItem = this.updateExistingItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.addItemToShoppingList = this.addItemToShoppingList.bind(this);
    this.incrementShoppingListQuantity = this.incrementShoppingListQuantity.bind(this);
    this.decrementShoppingListQuantity = this.decrementShoppingListQuantity.bind(this);
    this.removeFromShoppingList = this.removeFromShoppingList.bind(this);
    this.saveShoppingList = this.saveShoppingList.bind(this);
    this.loadList = this.loadList.bind(this);
    this.deleteMode = this.deleteMode.bind(this);
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
    }), editing: false, deleting: false });
  }

  getItemById(id){
    //find item by id on state
    let item = this.state.items.find((item) => {
        return item.id === id;
    });
    this.setState({currentItem: Object.assign({}, item), editing: true, deleting: false});
  }
  editMode(){
    this.setState({editing: !this.state.editing});
  }
  deleteMode(){
    this.setState({editing: !this.state.editing, deleting: !this.state.deleting});
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
    }), editing: false, deleting: false });
  }

  addItemToShoppingList(id){
    let newItem = true;
    let newShoppingList = this.state.currentShoppingList.list.map(item => {
      if(item.id === id) {
        newItem = false;
        item.quantity++;
        return Object.assign({}, item);
      } else {
        return item;
      }
    });

    if(newItem) {
      let item = this.state.items.find(item => {
        return item.id === id;
      });
      item.quantity = 1;
      newShoppingList.push(item);
    }
    this.setState({currentShoppingList : {list:  newShoppingList}});
  }

  incrementShoppingListQuantity(id){
    let newShoppingList = this.state.currentShoppingList.list.map(item => {
      if (item.id === id) {
        item.quantity++;
        return item;
      }
      else {
        return item;
      }
    });
    this.setState({currentShoppingList: {list:  newShoppingList}});
  }
  decrementShoppingListQuantity(id){
    let newShoppingList = this.state.currentShoppingList.list.map(item => {
      if (item.id === id && item.quantity > 0 ) {
        item.quantity--;
        return item;
      }
      else {
        return item;
      }
    });
    this.setState({currentShoppingList: {list:  newShoppingList}});
  }

  removeFromShoppingList(id){
    let newShoppingList = this.state.currentShoppingList.list.filter(item => {
      return item.id !== id;
    });
    this.setState({currentShoppingList: {list:  newShoppingList}});
  }

  saveShoppingList(listName, list){
    let newList = true;
    let listObject = {
      list: list,
      timeStamp: new Date(),
      name: listName
    }
    let newShoppingListsArray = this.state.shoppingLists.map(list => {
      if (list.name === listObject.name) {
        newList = false;
        return listObject;
      } else {
        return list;
      }
    });
    if(newList){
      newShoppingListsArray.push(listObject);
    }
    this.setState({shoppingLists: newShoppingListsArray});
  }

  loadList(list){
    this.setState({currentShoppingList: Object.assign({}, list)});
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
                addItemToShoppingList={this.addItemToShoppingList}
                incrementShoppingListQuantity={this.incrementShoppingListQuantity}
                decrementShoppingListQuantity={this.decrementShoppingListQuantity}
                removeFromShoppingList={this.removeFromShoppingList}
                saveShoppingList={this.saveShoppingList}
                loadList = {this.loadList}
                deleteMode = {this.deleteMode}
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
