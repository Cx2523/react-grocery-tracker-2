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
        deleting = {props.deleting}
        editing = {props.editing}
      />
      <ItemsList
        items={props.items}
        getItemById={props.getItemById}
        deleteItem={props.deleteItem}
        editItem={props.editItem}
        clearInput={props.clearInput}
        addItemToShoppingList={props.addItemToShoppingList}
        deleteMode = {props.deleteMode}
        deleting = {props.deleting}
        editing = {props.editing}
      />
    </div>
  );
}

export default ItemsContainer;
