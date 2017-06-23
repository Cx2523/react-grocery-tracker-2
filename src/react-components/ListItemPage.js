import React from 'react';
import ItemsContainer from './Items/ItemsContainer.js';
import { Grid } from 'semantic-ui-react';

const ListItemPage = (props) => {
  return (
    <Grid columns={2} divided padded>
      <Grid.Column>
        <ItemsContainer
          editItem={props.editItem}
          getItemById={props.getItemById}
          items={props.stateData.items}
          createNewItem={props.createNewItem}
          updateExistingItem={props.updateExistingItem}
          deleteItem={props.deleteItem}
          clearInput={props.clearInput}
        />
      </Grid.Column>
      <Grid.Column>
        <h1>Shopping List</h1>
      </Grid.Column>
    </Grid>
  );
}

export default ListItemPage;
