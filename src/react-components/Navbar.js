import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
  constructor(){
    super();
    this.state={
      activePage: 'activePage'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, { name }){
    this.setState({activePage: name})
  }

  render(){
    let activePage = this.state.activePage;
    return(
      <Menu widths={3} inverted>
        <Menu.Item as={Link} to={'/'} name='itemList' active={activePage === 'itemList'} onClick={this.handleClick}>
          <Icon name='edit' />
          Lists
        </Menu.Item>

        <Menu.Item as={Link} to={'/stats'} name='stats' active={activePage === 'stats'} onClick={this.handleClick}>
          <Icon name='line chart' />
          Stats
        </Menu.Item>

        <Menu.Item as={Link} to={'/about'} name='about' active={activePage === 'about'} onClick={this.handleClick}>
          <Icon name='info circle' />
          About
        </Menu.Item>
      </Menu>
    );
  }



}

export default Navbar;
