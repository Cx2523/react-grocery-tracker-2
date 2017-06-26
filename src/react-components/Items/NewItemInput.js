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
      inputFormat: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  componentWillReceiveProps(nextProps){
    // if (nextProps.editItem.id !== ''){
    //   this.setState({editing: true});
    // } else {
    //   this.setState({editing: false});
    // }
    if (nextProps.editing){
      this.setState({inputFormat: 'editing'});
    }
    else if (nextProps.deleting) {
      this.setState({inputFormat: 'deleting'});
    }
    else {
      this.setState({inputFormat: ''});
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
      <Segment inverted raised>
        <Header as='h1'>Manage Items</Header>
        <form  className="ui form">
          <div className="field" required>
            <Input
              name="name"
              onChange={this.handleChange}
              type="text"
              placeholder="Item Name"
              value={this.state.item.name}
              id={this.state.inputFormat}
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
              id={this.state.inputFormat}
            />
          </div>
          <div className="field">
            <Input
              name="desc"
              onChange={this.handleChange}
              type="text"
              placeholder="Description"
              value={this.state.item.desc}
              id={this.state.inputFormat}
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
