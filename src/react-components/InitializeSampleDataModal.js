import React from 'react';
import {Modal, Button, Icon, Header} from 'semantic-ui-react';
import sampleData from './sampleData.js'

class InitializeSampleDataModal extends React.Component{
  constructor(){
    super();
    this.state = {
      modalOpen: true
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  loadData(){
    const sampleDataState = sampleData;
    this.props.loadSampleData(sampleDataState);
    this.closeModal();
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
        open={this.state.modalOpen}
      >
        <Modal.Content>
          <Header as='h1' color={'orange'}>Welcome to Shopping Tracker 2.0, built with React, Semantic UI, and Webpack, hosted by Heroku.</Header>
          <Header as='h2' color={'yellow'}>There is currently no saved data for this app. Would you like to load some example data to get started?</Header>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            color='red'
            onClick={this.loadData}
          >Yes</Button>
          <Button
            basic
            color='blue'
            onClick={this.closeModal}
          >No</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default InitializeSampleDataModal;
