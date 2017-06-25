import React from 'react';
import ShoppingList from './ShoppingList.js';
import SavedLists from './SavedLists.js';

const ShoppingListContainer = (props) => {
  return (
    <div>
      <ShoppingList
        currentShoppingList={props.currentShoppingList}
        incrementShoppingListQuantity={props.incrementShoppingListQuantity}
        decrementShoppingListQuantity={props.decrementShoppingListQuantity}
        removeFromShoppingList={props.removeFromShoppingList}
        saveShoppingList={props.saveShoppingList}
        />
        <SavedLists savedShoppingLists={props.savedShoppingLists}/>
    </div>

  );
}

export default ShoppingListContainer;
