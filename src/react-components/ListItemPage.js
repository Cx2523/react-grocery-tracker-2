import React from 'react';
import ItemsContainer from './Items/ItemsContainer.js';
import ShoppingListContainer from './ShoppingList/ShoppingListContainer.js';
import { Grid } from 'semantic-ui-react';

const ListItemPage = (props) => {

  return (
    <Grid  columns={2} divided padded>
      <Grid.Column>
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
        />
      </Grid.Column>
      <Grid.Column >
        <ShoppingListContainer
          currentShoppingList={props.stateData.currentShoppingList}
          incrementShoppingListQuantity={props.incrementShoppingListQuantity}
          decrementShoppingListQuantity={props.decrementShoppingListQuantity}
          removeFromShoppingList={props.removeFromShoppingList}
          saveShoppingList={props.saveShoppingList}
          savedShoppingLists={props.stateData.shoppingLists}
          loadList={props.loadList}
          />
      </Grid.Column>
    </Grid>
  );
}

export default ListItemPage;
