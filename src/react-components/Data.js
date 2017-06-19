import React from 'react';
import { Segment, Input } from 'semantic-ui-react';


const Data = (props) => {
  console.log(props.children);
  return (
    <Segment loading={props.isLoading} piled>
      <h1>{props.city}</h1>
      <h2>{props.temp}</h2>
      <Input />
    </Segment>
  );
}

export default Data;
