import React from 'react';
import ItemsContainer from './Items/ItemsContainer.js';

const ListItemPage = (props) => {
  console.log(props);
  return (
    <ItemsContainer items={props.stateData.items} createNewItem={props.createNewItem} />
  );
}

export default ListItemPage;
