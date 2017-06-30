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
      inputFormat: 'creating',
      statusColor:'green'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.editing){
      this.setState({inputFormat: 'editing', statusColor:'yellow'});
    }
    else if (nextProps.deleting) {
      this.setState({inputFormat: 'deleting', statusColor: 'red'});
    }
    else {
      this.setState({inputFormat: 'creating', statusColor: 'green'});
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
      this.setState({statusColor: 'green' });
    } else {
      this.props.createNewItem(item);
    }
  }

  clearInput(event){
    this.setState({statusColor: 'green' });
    event.preventDefault();
    this.props.clearInput();
  }

  render(){
    return(
      <Segment color={this.state.statusColor} raised id={this.state.inputFormat} className='item-form'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field required>
            <input
              required
              name="name"
              onChange={this.handleChange}
              type="text"
              placeholder="Item Name"
              value={this.state.item.name}
              id={this.state.inputFormat}
            />
          </Form.Field>
          <Form.Field required>
            <input
              required
              label="$"
              name="cost"
              onChange={this.handleChange}
              type="number"
              placeholder="Cost Per Unit"
              value={this.state.item.cost}
              id={this.state.inputFormat}
            />
          </Form.Field>
          <Form.Field>
            <input
              name="desc"
              onChange={this.handleChange}
              type="text"
              placeholder="Description"
              value={this.state.item.desc}
              id={this.state.inputFormat}
            />
          </Form.Field>
          <Form.Button className='item-buttons' basic color={'green'}>Submit</Form.Button>
          <Form.Button className='item-buttons' basic color={'red'} onClick={this.clearInput}>Clear</Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default NewItemInput;
