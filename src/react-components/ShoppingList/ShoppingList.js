import React from 'react';
import { Table, Segment } from 'semantic-ui-react';
import ShoppingListRow from './ShoppingListRow.js';

const ShoppingList = (props) => {
  return (
    <Table celled padded striped color={"blue"} inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Cost per Unit</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Total Cost</Table.HeaderCell>
          <Table.HeaderCell>Purchased</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.currentShoppingList.map(item => <ShoppingListRow key={item.id} item={item}/>)}
      </Table.Body>
    </Table>
  )
}

export default ShoppingList;
