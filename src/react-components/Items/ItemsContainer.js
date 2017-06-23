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
      />
      <ItemsList items={props.items} getItemById={props.getItemById}/>
    </div>
  );
}

export default ItemsContainer;
