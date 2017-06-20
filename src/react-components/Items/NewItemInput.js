import React from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';

class NewItemInput extends React.Component {
  constructor(){
    super();
    this.state = {
      hidden: true,
      item: {
        name: '',
        cost: '',
        desc: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let field = event.target.name;
    let item = this.state.item;
    item[field] = event.target.value;
    this.setState({item: item});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createNewItem(this.state.item);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <input name="name"onChange={this.handleChange} type="text" placeholder="Item Name" />
        </div>
        <div className="field">
          <input name="cost" onChange={this.handleChange} type="text" placeholder="Cost Per Unit" />
        </div>
        <div className="field">
          <input name="desc" onChange={this.handleChange} type="text" placeholder="Description" />
        </div>
        <button className="ui button">Submit</button>
        <button className="ui button">Clear</button>
      </form>
    );
  }
}

export default NewItemInput;
