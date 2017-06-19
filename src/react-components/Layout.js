import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Head from './Header.js';
import axios from 'axios';
import Data from './Data.js';
import SideMenu from './SideMenu.js';


class Layout extends React.Component {
  constructor(props){
    super();
    this.state = {
      city: '',
      temp: '',
      isLoading: false
    };
  }

  componentDidMount(){
    this.setState({isLoading: true});
    axios.get('http://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&APPID=e60a91d360feac99086ba48ebf2580b2').then(res => {
      this.setState({city: res.data.name, temp: res.data.main.temp, isLoading: false});
    });
  }

  render() {
    return (
      <Container>
        <Head />

        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <SideMenu />
            </Grid.Column>
            <Grid.Column width={12}>
              <Data city={this.state.city} temp={this.state.temp} isLoading={this.state.isLoading}>
                <p>This is a child element Data</p>
              </Data>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Layout;
