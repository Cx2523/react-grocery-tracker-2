import React from 'react';

const SavedLists = (props) => {
  return (
    <div>
      {props.savedShoppingLists.map(list => <div key={list.timeStamp}>{list.name}</div>)}
    </div>
  );
}

export default SavedLists;
