import React from 'react';
import { Table, Segment } from 'semantic-ui-react';
import ShoppingListRow from './ShoppingListRow.js';

const ShoppingList = (props) => {
  let sumTotal = props.currentShoppingList.reduce((accumulator, item) => {
    return accumulator + item.cost * item.quantity;
  }, 0);
  
  return (
    <div>
      <h1>Current Shopping List</h1>
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
          {props.currentShoppingList.map(item => <ShoppingListRow key={item.id} item={item} incrementShoppingListQuantity={props.incrementShoppingListQuantity} decrementShoppingListQuantity={props.decrementShoppingListQuantity} removeFromShoppingList={props.removeFromShoppingList} />)}
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
    </div>
  );
}

export default ShoppingList;
