import React from 'react';
import Item from './Item.js';
import { Segment } from 'semantic-ui-react';

const ItemsList = (props) => {
  if(props.items.length >= 1){
    return (
      <Segment raised className="item-list">
        <h1>Saved Items</h1>
        { props.items.map(item => <Item key={item.id} item={item} getItemById={props.getItemById}/>) }
      </Segment>
    );
  }
  else{
    return(<h1>No Items</h1>);
  }
}

export default ItemsList;
