import React from 'react';
import './App.css';
import Home from './home';
import AlexDrake from '../alex/alexdrake';
import { Routes, Route } from 'react-router-dom';
import FainneUron from '../fainne/fainneuron';
import Shinzo from '../shinzo/shinzo';
import Geddy from '../geddy/geddy';
import Holly from '../holly/holly';
import Isa from '../isa/isa';
import Bael from '../bael/bael';
import ScrollToTop from './scroll';

///// listen bitch import styled components out of files at some point ok thx
//its done, yw

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="alexDrake" element={<AlexDrake />} />
          <Route path="fainneUron" element={<FainneUron />} />
          <Route path="shinzoKatetsu" element={<Shinzo />} />
          <Route path="geddySplintwalker" element={<Geddy />} />
          <Route path="hollyannaKnox" element={<Holly />} />
          <Route path="isaTenju" element={<Isa />} />
          <Route path="baelVolet" element={<Bael />} />
        </Routes>
      </div>
    );
  }
}

export default App;

// https://codepen.io/TajShireen/pen/ExLWgGb - credit for css on alex's page title
// https://codepen.io/Jintos/pen/OJKodm - webkit clip text credit fainne's title
// get the thing for the refraction
