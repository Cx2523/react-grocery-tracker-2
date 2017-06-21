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
    this.clearInput = this.clearInput.bind(this);
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
    this.setState({item:{
      name: '',
      cost: '',
      desc: ''
    }});
    this.props.createNewItem(item);
  }

  clearInput(event){
    this.setState({item:{
      name: '',
      cost: '',
      desc: ''
    }});
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <form  className="ui form">
          <div className="field">
            <input
              name="name"
              onChange={this.handleChange}
              type="text"
              placeholder="Item Name"
              value={this.state.item.name}
            />
          </div>
          <div className="field">
            <input
              name="cost"
              onChange={this.handleChange}
              type="text"
              placeholder="Cost Per Unit"
              value={this.state.item.cost}
            />
          </div>
          <div className="field">
            <input
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
      </div>
    );
  }
}

export default NewItemInput;
