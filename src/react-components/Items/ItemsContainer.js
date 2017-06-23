import React from 'react';
import NewItemInput from './NewItemInput';
import ItemsList from './ItemsList.js';

const ItemsContainer = (props) => {
  return (
    <div>
      <NewItemInput
        editItem={props.editItem}
        createNewItem={props.createNewItem}
        updateExistingItem={props.updateExistingItem}
        clearInput={props.clearInput}
      />
      <ItemsList
        items={props.items}
        getItemById={props.getItemById}
        deleteItem={props.deleteItem}
      />
    </div>
  );
}

export default ItemsContainer;
