import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

class Item extends React.Component{
  constructor(){
    super();
    this.state = {
      format: 'blue',
      iconAnimate: '',
      editing: false,
    }
    this.getItemById = this.getItemById.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.getOrClear = this.getOrClear.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.editItem.id === this.props.item.id){
      this.setState({
        editing: true,
        format: "yellow",
        iconAnimate: 'loading'
      });
    } else {
      this.setState({
        editing: false,
        format: "blue",
        iconAnimate: ''
      });
    }
  }

  getItemById(){
    this.props.getItemById(this.props.item.id);
  }
  deleteItem(){
    this.props.deleteItem(this.props.item.id);
  }
  clearInput(){
    this.props.clearInput();
  }
  getOrClear(){
    if(this.state.editing){
      console.log("Editing - run clear");
      this.clearInput();
    } else {
      console.log("Not editing - get item");
      this.getItemById()
    }
  }

  render(){
    let deleteIcon;
    if(this.state.editing){
        deleteIcon = <Icon onClick={this.deleteItem} color="red" size="huge" name="remove" />
    } else {
      deleteIcon = <Icon inverted size="huge" name="remove" />
    }

    return (
      <Segment className={this.state.format}>
        <div className="item-card">
          <div className="item-info">
            <h1>{this.props.item.name}</h1>
            <h1>{this.props.item.cost}</h1>
          </div>
          <div className="item-control">
            { deleteIcon }
            <Icon color={this.state.format} className={this.state.iconAnimate} onClick={this.getOrClear}
            size="huge"
            name="setting"/>
          </div>
        </div>
      </Segment>
    );
  }

}

export default Item;
