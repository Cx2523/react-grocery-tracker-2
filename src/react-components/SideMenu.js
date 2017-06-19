import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const SideMenu = () => {
  return (
    <Menu vertical fluid>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item><Link to={'/about'} >About</Link></Menu.Item>
      <Menu.Item>Stuff</Menu.Item>
      <Menu.Item>More Stuff</Menu.Item>
    </Menu>
  );
};

export default SideMenu;
