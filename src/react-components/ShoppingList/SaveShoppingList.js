import React from 'react';
import { Segment, Button, Input } from 'semantic-ui-react';

class SaveShoppingList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listName: props.currentShoppingList.name
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.props.saveShoppingList(this.state.listName, this.props.currentShoppingList.list);
    this.setState({listName: props.currentShoppingList.name});
  }
  handleChange(event){
    this.setState({listName: event.target.value});
  }
  componentWillReceiveProps(nextProps){
    this.setState({listName: nextProps.currentShoppingList.name});
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
