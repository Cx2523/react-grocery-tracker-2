import React from 'react';
import { Segment, Icon, Container } from 'semantic-ui-react';


const SavedLists = (props) => {
  const loadList = () => {
    props.loadList(props.list);
  }
  const deleteList = () => {
    props.deleteList(props.list);
  }


  return (
    <Segment color={'black'} size='tiny'>
      <div className="saved-list-container">
        <div className="saved-list-text">
          <h4>{props.list.name}</h4>
          {new Date(props.list.timeStamp).toUTCString()}
        </div>
        <div className='saved-list-button'>
          <Icon onClick={loadList} size="big" name="add circle"/>
          <p>Use List</p>
        </div>
        <div className='saved-list-button'>
          <Icon onClick={deleteList} size="big" name="minus circle"/>
          <p>Delete List</p>
        </div>
      </div>
    </Segment>

  );
}

export default SavedLists;
