import React from 'react';

import './homepage.styles.scss';
import {HomePageContainer} from './homepage.styles';
import Directory from '../component/directory/directory.component';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;