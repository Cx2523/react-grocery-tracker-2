import React from 'react';
import NewItemInput from './NewItemInput';
import ItemsList from './ItemsList.js';
import { Segment, Accordion, Icon, Header } from 'semantic-ui-react';

class ItemsContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      activeIndex: 1,
      header: 'Create New Items',
      headerFormat: 'green'
    }
    this.openItemEdit = this.openItemEdit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.deleting || nextProps.editing) {
      this.setState({activeIndex: 0});
    }
    else {
      this.setState({activeIndex: 1});
    }
    if(nextProps.deleting){
      this.setState({header: 'Delete This Item', headerFormat: 'red'});
    }
    else if(nextProps.editing){
      this.setState({header: 'Edit This Item', headerFormat: 'yellow'});
    }
    else{
      this.setState({header: 'Create New Items', headerFormat: 'green'});
    }
  }

  openItemEdit(){
    if (!this.props.deleting && !this.props.editing){
      if(this.state.activeIndex === 1){
        this.setState({activeIndex: 0});
      }
      else if(this.state.activeIndex == 0){
        this.setState({activeIndex: 1});
      }
    }
  }

  render(){
    return (
      <div>
        <Accordion onTitleClick={this.openItemEdit} activeIndex={this.state.activeIndex}>
          <Accordion.Title>
            <Segment inverted color={this.state.headerFormat} raised >
              <Icon size={'big'} name='edit'></Icon>
              <h2 id='manage-items-title'>{this.state.header}</h2>
            </Segment>
          </Accordion.Title>
          <Accordion.Content>
            <NewItemInput
              editItem={this.props.editItem}
              createNewItem={this.props.createNewItem}
              updateExistingItem={this.props.updateExistingItem}
              clearInput={this.props.clearInput}
              deleting = {this.props.deleting}
              editing = {this.props.editing}
            />
          </Accordion.Content>
        </Accordion>
        <ItemsList
          items={this.props.items}
          getItemById={this.props.getItemById}
          deleteItem={this.props.deleteItem}
          editItem={this.props.editItem}
          clearInput={this.props.clearInput}
          addItemToShoppingList={this.props.addItemToShoppingList}
          deleteMode = {this.props.deleteMode}
          deleting = {this.props.deleting}
          editing = {this.props.editing}
        />
      </div>
    );
  }
}

export default ItemsContainer;
