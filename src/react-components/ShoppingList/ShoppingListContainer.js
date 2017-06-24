import React from 'react';
import ShoppingList from './ShoppingList.js';

const ShoppingListContainer = (props) => {
  return (
    <ShoppingList currentShoppingList={props.currentShoppingList}
      incrementShoppingListQuantity={props.incrementShoppingListQuantity}
      decrementShoppingListQuantity={props.decrementShoppingListQuantity}
      removeFromShoppingList={props.removeFromShoppingList}
      />
  );
}

export default ShoppingListContainer;
