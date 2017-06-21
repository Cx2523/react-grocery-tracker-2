import React from 'react';
import { Segment } from 'semantic-ui-react';


const Item = (props) => {
  return (
    <Segment>
      <h1>{props.name}</h1>
    </Segment>
  );
}

export default Item;
