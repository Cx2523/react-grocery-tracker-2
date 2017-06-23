import React from 'react';
import { Segment, Button, Form, Input, Header } from 'semantic-ui-react';

class NewItemInput extends React.Component {
  constructor(){
    super();
    this.state = {
      hidden: true,
      item: {
        name: '',
        cost: '',
        desc: '',
        id: ''
      },
      editing: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.editItem.id !== ''){
      this.setState({editing: true});
    }
    this.setState({item: Object.assign({}, nextProps.editItem)});
  }

  handleChange(event){
    let field = event.target.name;
    let item = this.state.item;
    item[field] = event.target.value;
    this.setState({item: item});
  }

  handleSubmit(event){
    event.preventDefault();
    const item = Object.assign({} , this.state.item); //copy item before input clear
    if (item.id !== '') {
      this.props.updateExistingItem(item);
      this.setState({editing: false});
    } else {
      this.props.createNewItem(item);
    }
  }

  clearInput(event){
    this.setState({editing: false });
    event.preventDefault();
    this.props.clearInput();
  }

  render(){
    return(
      <Segment raised>
        <Header as='h1'>Manage Items</Header>
        <form  className="ui form">
          <div className="field" required>
            <Input
              name="name"
              onChange={this.handleChange}
              type="text"
              placeholder="Item Name"
              value={this.state.item.name}
            />
          </div>
          <div className="field">
            <Input
              label="$"
              name="cost"
              onChange={this.handleChange}
              type="text"
              placeholder="Cost Per Unit"
              value={this.state.item.cost}
              className="item-input"
            />
          </div>
          <div className="field">
            <Input
              name="desc"
              onChange={this.handleChange}
              type="text"
              placeholder="Description"
              value={this.state.item.desc}
            />
          </div>
          <button onClick={this.handleSubmit} className="ui basic green button">Submit</button>
          <button onClick={this.clearInput} className="ui basic red button">Clear</button>
        </form>
      </Segment>
    );
  }
}

export default NewItemInput;
