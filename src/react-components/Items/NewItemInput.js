import React from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';

class NewItemInput extends React.Component {
  constructor(){
    super();
    this.state = {
      hidden: true
    };
  }
  render(){
    return(
      <form className="ui form">
        <div className="field">
          <input type="text" placeholder="Item Name" />
        </div>
        <div className="field">
          <input type="text" placeholder="Cost Per Unit" />
        </div>
        <div className="field">
          <input type="text" placeholder="Description" />
        </div>
        <button className="ui button">Submit</button>
        <button className="ui button">Clear</button>
      </form>
    );
  }
}

export default NewItemInput;
