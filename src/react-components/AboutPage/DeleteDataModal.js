import React from 'react';
import {Modal, Button, Icon, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class DeleteDataModal extends React.Component{
  constructor(){
    super();
    this.state = {
      modalOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  deleteData(){
    localStorage.clear('reactGroceryTrackerData');
    this.closeModal();
    location.reload();
  }

  openModal(){
    this.setState({modalOpen: true})
  }

  closeModal(){
    this.setState({modalOpen: false})
  }

  render(){
    return (
      <Modal
        basic
        size='small'
        trigger={
          <Header id="delete-control" as='h2' icon>
            <Icon
              onClick={this.openModal}
              size={'massive'}
              name='ban'
              color={'red'}
            />
            Reset Data
          </Header>
        }
        open={this.state.modalOpen}
      >
        <Modal.Content>
          <Header as='h1' color={'red'}>Permanently delete saved data for this app?</Header>
        </Modal.Content>
        <Modal.Actions>
          <Button
            as={Link}
            to={'/'}
            basic
            color='red'
            onClick={this.deleteData}
          >Yes</Button>
          <Button
            basic
            color='blue'
            onClick={this.closeModal}
          >Cancel</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DeleteDataModal;
