import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

class Item extends React.Component{
  constructor(){
    super();
    this.state = {
      format: '',
      iconAnimate: '',
      iconSize: 'big'
    }
    this.getItemById = this.getItemById.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  getItemById(){
    this.setState({
      format: "inverted yellow",
      iconAnimate: 'loading',
      iconSize: 'huge'
    });
    this.props.getItemById(this.props.item.id);
  }
  deleteItem(){
    this.props.deleteItem(this.props.item.id);
  }
  render(){
    return (
      <Segment className={this.state.format} raised>
        <div className="item-card">
          <div className="item-info">
            <h1>{this.props.item.name}</h1>
            <h1>{this.props.item.cost}</h1>
          </div>
          <div className="item-control">
            <Icon color="green" size="big" name="plus" />
            <Icon className={this.state.iconAnimate} onClick={this.getItemById} size={this.state.iconSize} name="setting" />
            <Icon onClick={this.deleteItem} color="red" size="big" name="remove" />
          </div>
        </div>
      </Segment>
    );
  }

}

export default Item;
