import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

const Item = (props) => {
  const getItemById = () => {
    props.getItemById(props.item.id);
  }

  return (
    <Segment raised>
      <div className="item-card">
        <div className="item-info">
          <h1>{props.item.name}</h1>
          <h1>{props.item.cost}</h1>
        </div>
        <div className="item-control">
          <Icon color="green" size="big" name="plus" />
          <Icon onClick={getItemById} color="blue" size="big" name="setting" />
          <Icon color="red" size="big" name="remove" />
        </div>
      </div>
    </Segment>
  );
}

export default Item;
