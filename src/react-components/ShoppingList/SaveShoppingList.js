import React from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';
// import SavedLists from './SavedLists.js';

class SaveShoppingList extends React.Component{
  constructor(){
    super();
    this.state = {
      listName: "New Shopping List"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.props.saveShoppingList(this.state.listName, this.props.currentShoppingList.list);
    this.setState({listName: 'New Shopping List'});
  }
  handleChange(event){
    this.setState({listName: event.target.value});
  }

  render(){
    return (
      <Segment inverted color={'blue'} >
        <Input
          name="listName"
          type="text"
          placeholder="List Name"
          onChange={this.handleChange}
          value={this.state.listName}
        />
        <Button onClick={this.handleSubmit}>Save List</Button>
      </Segment>
    );
  }
}

export default SaveShoppingList;
