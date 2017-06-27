import React from 'react';
import SavedLists from './SavedLists.js';
import { Segment, Button } from 'semantic-ui-react';

class LoadShoppingLists extends React.Component {
  constructor(){
    super();
    this.state = {
      showSavedLists: false
    }
    this.toggleSavedLists = this.toggleSavedLists.bind(this);
  }

  toggleSavedLists(){
    this.setState({showSavedLists: !this.state.showSavedLists});
  }

  render(){
    let savedLists;
    if (this.state.showSavedLists) {
      savedLists = <div>{this.props.savedShoppingLists.map(list => <SavedLists key={list.timeStamp} list={list} loadList={this.props.loadList}/>)}</div>
    } else {
      savedLists = <div></div>;
    }
    return (
      <Segment raised>
        <Button onClick={this.toggleSavedLists}>Show Saved Lists</Button>
        { savedLists }
      </Segment>
    );
  }
}

export default LoadShoppingLists;
