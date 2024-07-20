import React from 'react';
import './App.css';
import Home from './home';
import AlexDrake from '../alex/alexdrake'
import { Routes, Route } from 'react-router-dom'
import FainneUron from '../fainne/fainneuron';
import Shinzo from '../shinzo/shinzo';
import Geddy from '../geddy/geddy';
import Holly from '../holly/holly';
import Isa from '../isa/isa';
import Bael from '../bael/bael';
import ScrollToTop from './scroll';

class App extends React.Component {
  constructor () {
    super() 
    this.state = {
     
    };
  }
  render () {
    return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="alexDrake" element={<AlexDrake />}/>
        <Route path="fainneUron" element={<FainneUron />}/>
        <Route path="shinzoKatetsu" element={<Shinzo />}/>
        <Route path="geddySplintwalker" element={<Geddy />}/>
        <Route path="hollyannaKnox" element={<Holly />}/>
        <Route path="isaTenju" element={<Isa />}/>
        <Route path="baelVolet" element={<Bael />}/>
      </Routes>
    </div>
  )};
}

export default App;
