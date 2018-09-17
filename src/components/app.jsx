import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBigLogo from './header-biglogo';
import CoverSlider from './cover-slider';
import TabsGrid from './content-tabs-grid';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <HeaderBigLogo />
          <CoverSlider />
          <TabsGrid />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
