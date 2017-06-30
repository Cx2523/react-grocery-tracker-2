import React from 'react';
import AboutText from  './AboutPage/AboutText.js';
import DeleteDataModal from './AboutPage/DeleteDataModal.js';
import { Container } from 'semantic-ui-react';

const AboutPage = (props) => {
  console.log(props);
  return (
    <Container>
      <DeleteDataModal history={props.history}/>
      <AboutText />
    </Container>
  );
}

export default AboutPage;
