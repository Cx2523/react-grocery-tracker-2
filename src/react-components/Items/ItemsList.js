import React from 'react';
import Item from './Item.js';

const ItemsList = (props) => {
  if(props.items.length >= 1){
    return (
      <div>
        { props.items.map(item => <Item key={item.name} name={item.name}/>) }
      </div>
    );
  }
  else{
    return(<h1>No Items</h1>);
  }
}

export default ItemsList;
