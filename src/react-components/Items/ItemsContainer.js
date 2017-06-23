import React from 'react';
import NewItemInput from './NewItemInput';
import ItemsList from './ItemsList.js';

const ItemsContainer = (props) => {
  return (
    <div>
      <NewItemInput editItem={props.editItem} createNewItem={props.createNewItem}/>
      <ItemsList items={props.items} getItemById={props.getItemById}/>
    </div>
  );
}

export default ItemsContainer;
