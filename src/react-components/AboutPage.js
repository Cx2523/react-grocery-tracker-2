import React from 'react';
import AboutText from  './AboutPage/AboutText.js';
import DeleteDataModal from './AboutPage/DeleteDataModal.js';
import { Container } from 'semantic-ui-react';

const AboutPage = () => {
  return (
    <Container>
      <DeleteDataModal />
      <AboutText />
    </Container>
  );
}

export default AboutPage;
