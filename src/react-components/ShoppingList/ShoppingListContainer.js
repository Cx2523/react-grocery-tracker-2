import React from 'react';
import ShoppingList from './ShoppingList.js';
import ManageShoppingLists from './ManageShoppingLists.js';

const ShoppingListContainer = (props) => {
  return (
    <div>
      <ShoppingList
        currentShoppingList={props.currentShoppingList}
        incrementShoppingListQuantity={props.incrementShoppingListQuantity}
        decrementShoppingListQuantity={props.decrementShoppingListQuantity}
        removeFromShoppingList={props.removeFromShoppingList}
        />
      <ManageShoppingLists
        saveShoppingList={props.saveShoppingList}
        currentShoppingList={props.currentShoppingList}
        />
    </div>
  );
}

export default ShoppingListContainer;
