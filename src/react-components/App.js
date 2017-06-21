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
      <Router>
        <div>
          <Route exact path="/"
            render={() => <ListItemPage
              stateData={this.state}
              createNewItem={this.createNewItem}
              />}
            />
          <Route path="/stats" component={StatsPage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
