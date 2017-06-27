import React from 'react';
import { Table, Segment } from 'semantic-ui-react';
import ShoppingListRow from './ShoppingListRow.js';
import SaveShoppingList from './SaveShoppingList.js';

const ShoppingList = (props) => {
  let sumTotal;
  if(props.currentShoppingList.list.length > 0) {
    sumTotal = props.currentShoppingList.list.reduce((accumulator, item) => {
      return accumulator + item.cost * item.quantity;
    }, 0);
  }

  return (
    <Segment raised>
      <SaveShoppingList saveShoppingList={props.saveShoppingList} currentShoppingList={props.currentShoppingList}/>
      <Table textAlign={'center'} celled padded striped color={"blue"} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>Cost per Unit</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Total Cost</Table.HeaderCell>
            <Table.HeaderCell>Increase Quantity</Table.HeaderCell>
            <Table.HeaderCell>Decrease Quantity</Table.HeaderCell>
            <Table.HeaderCell>Remove from list</Table.HeaderCell>
            <Table.HeaderCell>Purchased</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.currentShoppingList.list.map(item => <ShoppingListRow key={item.id} item={item} incrementShoppingListQuantity={props.incrementShoppingListQuantity} decrementShoppingListQuantity={props.decrementShoppingListQuantity} removeFromShoppingList={props.removeFromShoppingList} />)}
        </Table.Body>
        <Table.Footer>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>{sumTotal}</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Footer>
      </Table>
    </Segment>
  );
}

export default ShoppingList;
