import React from 'react';
import NewItemInput from './NewItemInput';

const ItemsContainer = (props) => {
  return (
    <NewItemInput createNewItem={props.createNewItem}/>
  );
}

export default ItemsContainer;
