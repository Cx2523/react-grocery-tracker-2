import React from 'react';
import { Segment, Icon, Container } from 'semantic-ui-react';

class Item extends React.Component{
  constructor(){
    super();
    this.state = {
      format: 'blue',
      iconAnimate: ''
    }
    this.getItemById = this.getItemById.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.getOrClear = this.getOrClear.bind(this);
    this.deleteMode = this.deleteMode.bind(this);
    this.addItemToShoppingList = this.addItemToShoppingList.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.editItem.id === this.props.item.id && nextProps.editing){
      this.setState({
        format: 'yellow',
        iconAnimate: 'loading'
      });
    }
    else if(nextProps.editItem.id === this.props.item.id && nextProps.deleting){
      this.setState({
        format: 'red',
        iconAnimate: 'loading'
      });
    }
    else {
      this.setState({
        format: 'blue',
        iconAnimate: ''
      });
    }

  }

  deleteMode(){
    this.props.deleteMode();
  }

  addItemToShoppingList(){
    this.props.addItemToShoppingList(this.props.item.id);
  }

  deleteItem(){
    this.props.deleteItem(this.props.item.id);
  }

  getItemById(){
    this.props.getItemById(this.props.item.id);
  }
  clearInput(){
    this.props.clearInput();
  }
  getOrClear(){
    if(this.props.editing && this.props.editItem.id === this.props.item.id){
      this.clearInput();
    } else {
      this.getItemById()
    }
  }

  render(){
    let deleteIcon;
    let deletingCheckOrEditIcon;

    if(this.props.editing && this.props.editItem.id === this.props.item.id){
        deleteIcon = <Icon onClick={this.deleteMode} color="red" size="huge" name="remove circle"/>
    } else if (this.props.deleting && this.props.editItem.id === this.props.item.id){
        deleteIcon = <Icon color="red" size="huge" name="remove circle" className={this.state.iconAnimate} />
    } else {
        deleteIcon = <Icon style={{visibility:'hidden'}} size="huge" name="remove" />
    }

    if(this.props.deleting && this.props.editItem.id === this.props.item.id){
      deletingCheckOrEditIcon = (
        <Container text textAlign="center">
          <p>Delete this item?</p>
          <button onClick={this.deleteItem} className="ui red button">Yes</button>
          <button onClick={this.deleteMode} className="ui gray button">No</button>
        </Container>
      );
    } else {
      deletingCheckOrEditIcon = <Icon color={this.state.format} className={this.state.iconAnimate} onClick={this.getOrClear}
      size="huge"
      name="setting"/>
    }

    return (
      <Segment id="item-card-container" size={"tiny"} color={this.state.format}>
        <div className="item-card">
          <Segment inverted color={this.state.format} size={"mini"} onClick={this.addItemToShoppingList} className="item-info">
            <h3>{this.props.item.name}</h3>
            <h3>{this.props.item.cost}</h3>
          </Segment>
          <div className="item-control">
            { deleteIcon }
            { deletingCheckOrEditIcon }
          </div>
        </div>
      </Segment>
    );
  }

}

export default Item;
