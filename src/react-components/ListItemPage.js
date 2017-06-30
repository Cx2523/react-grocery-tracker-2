import React from 'react';
import ItemsContainer from './Items/ItemsContainer.js';
import ShoppingListContainer from './ShoppingList/ShoppingListContainer.js';
import { Grid } from 'semantic-ui-react';

const ListItemPage = (props) => {

  return (
    <Grid divided padded>
      <Grid.Column width={6}>
        <ItemsContainer
          editItem={props.editItem}
          getItemById={props.getItemById}
          items={props.stateData.items}
          createNewItem={props.createNewItem}
          updateExistingItem={props.updateExistingItem}
          deleteItem={props.deleteItem}
          clearInput={props.clearInput}
          addItemToShoppingList={props.addItemToShoppingList}
          deleteMode = {props.deleteMode}
          deleting = {props.stateData.deleting}
          editing = {props.stateData.editing}
          creating = {props.stateData.creating}
          createMode={props.createMode}
        />
      </Grid.Column>
      <Grid.Column width={10} >
        <ShoppingListContainer
          currentShoppingList={props.stateData.currentShoppingList}
          incrementShoppingListQuantity={props.incrementShoppingListQuantity}
          decrementShoppingListQuantity={props.decrementShoppingListQuantity}
          removeFromShoppingList={props.removeFromShoppingList}
          saveShoppingList={props.saveShoppingList}
          savedShoppingLists={props.stateData.shoppingLists}
          loadList={props.loadList}
          deleteList={props.deleteList}
          />
      </Grid.Column>
    </Grid>
  );
}

export default ListItemPage;
