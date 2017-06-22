import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';


const Item = (props) => {
  return (
    <Segment raised>
      <div className="item-card">
        <div className="item-info">
          <h1>{props.name}</h1>
          <h1>{props.cost}</h1>
        </div>
        <div className="item-control">
          <Icon color="green" size="big" name="plus" />
          <Icon color="blue" size="big" name="setting" />
          <Icon color="red" size="big" name="remove" />
        </div>
      </div>
    </Segment>
  );
}

export default Item;
