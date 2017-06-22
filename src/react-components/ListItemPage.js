import React from 'react';
import ItemsContainer from './Items/ItemsContainer.js';
import { Grid } from 'semantic-ui-react';

const ListItemPage = (props) => {
  return (
    <Grid columns={2} divided padded>
      <Grid.Column>
        <ItemsContainer items={props.stateData.items} createNewItem={props.createNewItem} />
      </Grid.Column>
      <Grid.Column>
        <h1>Shopping List</h1>
      </Grid.Column>
    </Grid>
  );
}

export default ListItemPage;
