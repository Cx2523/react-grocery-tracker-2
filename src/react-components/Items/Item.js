import React from 'react';
import { Segment, Icon, Container } from 'semantic-ui-react';

class Item extends React.Component{
  constructor(){
    super();
    this.state = {
      format: 'blue',
      iconAnimate: '',
      editing: false,
      deleting: false
    }
    this.getItemById = this.getItemById.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.getOrClear = this.getOrClear.bind(this);
    this.deleteMode = this.deleteMode.bind(this);
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
        iconAnimate: '',
        deleting: false
      });
    }
  }

  deleteMode(){
    if(this.state.deleting){
      this.setState({
        editing: true,
        format: "yellow",
        iconAnimate: 'loading',
        deleting: false
      });
    } else {
      this.setState({
        editing: false,
        format: "red",
        iconAnimate: 'loading',
        deleting: true
      });
    }
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
    if(this.state.editing){
      this.clearInput();
    } else {
      this.getItemById()
    }
  }

  render(){
    let deleteIcon;
    let deletingCheckOrEditIcon;

    if(this.state.editing){
        deleteIcon = <Icon onClick={this.deleteMode} color="red" size="huge" name="remove circle"/>
    } else if (this.state.deleting){
        deleteIcon = <Icon color="red" size="huge" name="remove circle" className={this.state.iconAnimate} />
    } else {
      deleteIcon = <Icon inverted size="huge" name="remove" />
    }

    if(this.state.deleting){
      deletingCheckOrEditIcon = (
        <Container textAlign="center">
          <h5>Are you sure you want to<br/>delete this item?</h5>
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
      <Segment className={this.state.format}>
        <div className="item-card">
          <div className="item-info">
            <h1>{this.props.item.name}</h1>
            <h1>{this.props.item.cost}</h1>
          </div>
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
