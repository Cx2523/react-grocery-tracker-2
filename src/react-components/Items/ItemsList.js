import React from 'react';
import Item from './Item.js';
import { Segment } from 'semantic-ui-react';

const ItemsList = (props) => {
  if(props.items.length >= 1){
    return (
      <Segment color={'blue'} raised className="item-list">
        <h1>Saved Items</h1>

        {props.items.map((item, index) => {
          return <Item
              key={item.id}
              item={item}
              getItemById={props.getItemById}
              deleteItem={props.deleteItem}
              editItem={props.editItem}
              clearInput={props.clearInput}
              addItemToShoppingList={props.addItemToShoppingList}
              deleteMode={props.deleteMode}
              deleting={props.deleting}
              editing={props.editing}
            />
          }
        )}
      </Segment>
    );
  }
  else{
    return(
      <Segment color={'blue'} raised className="item-list">
        <h1>No Saved Items</h1>
        <p>Click on create new items to add...</p>
      </Segment>
    );
  }
}

export default ItemsList;
