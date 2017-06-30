import React from 'react';
import ShoppingList from './ShoppingList.js';
import LoadShoppingLists from './LoadShoppingLists.js';

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
        <LoadShoppingLists
          loadList={props.loadList} savedShoppingLists={props.savedShoppingLists}
          deleteList={props.deleteList}
        />
    </div>

  );
}

export default ShoppingListContainer;
