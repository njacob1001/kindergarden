import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBigLogo from './header-biglogo';
import CoverSlider from './cover-slider';
import TabsGrid from './content-tabs-grid';
import PromotionalBanner from './promotional-banner';
import Topics from './topics';
import NewsCards from './noticias';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <HeaderBigLogo />
          <CoverSlider />
          <TabsGrid />
          <PromotionalBanner />
          <Topics />
          <NewsCards />
          <PromotionalBanner />
          <hr />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
