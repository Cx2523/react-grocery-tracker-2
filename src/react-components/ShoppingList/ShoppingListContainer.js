import React from 'react';
import ShoppingList from './ShoppingList.js';

const ShoppingListContainer = (props) => {
  return (
    <ShoppingList currentShoppingList={props.currentShoppingList} />
  );
}

export default ShoppingListContainer;
