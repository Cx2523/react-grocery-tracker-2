import React from 'react';
import { Segment, Button, Input, Form } from 'semantic-ui-react';

class SaveShoppingList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.saveShoppingList(this.state.listName, this.props.currentShoppingList.list);
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <input
              required
              name="listName"
              action="Save"
              type="text"
              placeholder="List Name"
              onChange={this.handleChange}
              value={this.state.listName}
            />
            <Form.Button basic color={'yellow'} content='Save'/>
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}

export default SaveShoppingList;
