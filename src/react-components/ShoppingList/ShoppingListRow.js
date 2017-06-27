import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import ReactDOM from 'react-dom';


class ShoppingListRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentQuantity: props.item.quantity
    }
    this.incrementShoppingListQuantity = this.incrementShoppingListQuantity.bind(this);
    this.decrementShoppingListQuantity = this.decrementShoppingListQuantity.bind(this);
    this.removeFromShoppingList = this.removeFromShoppingList.bind(this);
    this.colorFlash = this.colorFlash.bind(this);
  }

  incrementShoppingListQuantity(){
    this.props.incrementShoppingListQuantity(this.props.item.id);
  }
  decrementShoppingListQuantity(){
    this.props.decrementShoppingListQuantity(this.props.item.id);

  }
  removeFromShoppingList(){
    this.props.removeFromShoppingList(this.props.item.id);
  }

  colorFlash(element, color){
    element.style.backgroundColor = color;
    element.style.color = "black";
    element.style.fontSize = "1.3em";
    setTimeout(function(){
      element.style.backgroundColor = "";
      element.style.color = "";
      element.style.fontSize = "";
    }, 200);
  }

  componentWillReceiveProps(nextProps){
    let tdQuantity = this.tabledataQuantity;
    let tdTotalCost = this.tabledataTotalCost;
    let tdCost = this.tabledataCost;
    let colorFlash = this.colorFlash;
    if(nextProps.item.quantity > this.state.currentQuantity){
      colorFlash(tdQuantity, '#2ECC40');
      setTimeout(function(){
        colorFlash(tdCost, '#2ECC40');
      }, 100);
      setTimeout(function(){
        colorFlash(tdTotalCost, '#2ECC40');
      }, 200);
    }
    if(nextProps.item.quantity < this.state.currentQuantity){
      colorFlash(tdQuantity, '#FFE21F');
      setTimeout(function(){
        colorFlash(tdCost, '#FFE21F');
      }, 100);
      setTimeout(function(){
        colorFlash(tdTotalCost, '#FFE21F');
      }, 200);
    }

    this.setState({currentQuantity: nextProps.item.quantity});
  }


  render(){
    return (
        <Table.Row>
          <Table.Cell>{this.props.item.name}</Table.Cell>
          <Table.Cell>
            <div
              className="datacell"
              ref={
                (el) => this.tabledataQuantity = el
              }
            >
              {this.props.item.quantity}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div
              className="datacell"
              ref={
                (el) => this.tabledataCost = el
              }
            >
              {this.props.item.cost}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div
              className="datacell"
              ref={
                (el) => this.tabledataTotalCost = el
              }
            >
              {this.props.item.cost * this.props.item.quantity}
            </div>
          </Table.Cell>
          <Table.Cell onClick={this.incrementShoppingListQuantity}>
            <Icon inverted color="green" name="plus" size="large"/>
          </Table.Cell>
          <Table.Cell onClick={this.decrementShoppingListQuantity}>
            <Icon inverted color="yellow" name="minus" size="large"/>
          </Table.Cell>
          <Table.Cell onClick={this.removeFromShoppingList}>
            <Icon inverted color="red" name="remove" size="large"/>
          </Table.Cell>
          <Table.Cell>"Purchased"</Table.Cell>
        </Table.Row>
    );
  }
}

export default ShoppingListRow;
