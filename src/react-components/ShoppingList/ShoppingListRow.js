import React from 'react';
import { Table } from 'semantic-ui-react';

const ShoppingListRow = (props) => {
  return (

      <Table.Row>
        <Table.HeaderCell>{props.item.name}</Table.HeaderCell>
        <Table.HeaderCell>{props.item.cost}</Table.HeaderCell>
        <Table.HeaderCell>{props.item.quantity}</Table.HeaderCell>
        <Table.HeaderCell>{props.item.cost * props.item.quantity}</Table.HeaderCell>
        <Table.HeaderCell>"Purchased"</Table.HeaderCell>
      </Table.Row>

  )
}

export default ShoppingListRow;
