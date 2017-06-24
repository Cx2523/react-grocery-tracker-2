import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

const ManageShoppingLists = (props) => {
  const saveShoppingList = () => {
    props.saveShoppingList(props.currentShoppingList);
  }
  
  return (
    <Segment inverted color={'blue'} >
      <Button onClick={saveShoppingList}>Save List</Button>
      <Button>Load Lists</Button>
    </Segment>
  );
}

export default ManageShoppingLists;
