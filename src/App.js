import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import AuroraInfo from './components/aurora_info';
import Highlight from './components/highlight';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App" style={{
        height: '1500px',
        backgroundColor:'white'
      }}>
        <Element name="Event starts in">
          <Header/>
        </Element>
        <Element name="Featured">
          <Featured/>
        </Element>
        <Element name="Aurora NFO">
          <AuroraInfo/>
        </Element>
        <Element name="Highlights">
          <Highlight/>
        </Element>
        <Element name="Pricing">
          <Pricing/>
        </Element>
        <Element name="Location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
