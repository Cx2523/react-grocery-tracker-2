import React from 'react';
import NewItemInput from './NewItemInput';
import ItemsList from './ItemsList.js';

const ItemsContainer = (props) => {
  return (
    <div>
      <NewItemInput createNewItem={props.createNewItem}/>
      <ItemsList items={props.items}/>
    </div>
  );
}

export default ItemsContainer;
