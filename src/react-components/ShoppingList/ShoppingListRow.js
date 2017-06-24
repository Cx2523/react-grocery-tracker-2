import React from 'react';
import { Table, Icon } from 'semantic-ui-react';

const ShoppingListRow = (props) => {
  const incrementShoppingListQuantity = () => {
    props.incrementShoppingListQuantity(props.item.id);
  }
  const decrementShoppingListQuantity = () => {
    props.decrementShoppingListQuantity(props.item.id);
  }
  const removeFromShoppingList = () => {
    props.removeFromShoppingList(props.item.id);
  }

  return (
      <Table.Row>
        <Table.Cell>{props.item.name}</Table.Cell>
        <Table.Cell>{props.item.cost}</Table.Cell>
        <Table.Cell>{props.item.quantity}</Table.Cell>
        <Table.Cell>{props.item.cost * props.item.quantity}</Table.Cell>
        <Table.Cell onClick={incrementShoppingListQuantity}>
          <Icon inverted color="green" name="plus" size="large"/>
        </Table.Cell>
        <Table.Cell onClick={decrementShoppingListQuantity}>
          <Icon inverted color="yellow" name="minus" size="large"/>
        </Table.Cell>
        <Table.Cell onClick={removeFromShoppingList}>
          <Icon inverted color="red" name="remove" size="large"/>
        </Table.Cell>
        <Table.Cell>"Purchased"</Table.Cell>
      </Table.Row>
  )
}

export default ShoppingListRow;
