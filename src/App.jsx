import React, { Component } from 'react';
import './Props.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// import Notfound from './components/Notfound';

import ProductsContextProvider from './Global/ProductsContext'
import Products from './components/Products';

import ItemContextProvider  from './Global/ItemContext'
// import Item from './components/Item';

import Mobilephones from './components/Mobilephones';
import Cars from './components/Cars';
import Motorcycles from './components/Motorcycles';
import Houses from './components/Houses';
import TVVideoAudio from './components/TVVideoAudio';
import Tablets from './components/Tablets';
import LandsAndPlots from './components/LandsAndPlots';

class App extends Component {
  render() {
    return (
      <ProductsContextProvider>
        <ItemContextProvider>
          <Router>
            <Header/>
            <Route path='/' exact component={Home} />
            {/* <Route path='/item' exact component={Item} /> */}
            <Route path='/MobilePhones' exact component={Mobilephones} />
            <Route path='/Cars' exact component={Cars} />
            <Route path='/Motorcycles' exact component={Motorcycles} />
            <Route path='/Houses' exact component={Houses} />
            <Route path='/TV-Video-Audio' exact component={TVVideoAudio} />
            <Route path='/Tablets' exact component={Tablets} />
            <Route path='/LandsAndPlots' exact component={LandsAndPlots} />
            {/* <Route component={Notfound} /> */}
            <Footer />
          </Router>
        </ItemContextProvider>
      </ProductsContextProvider>
    )
  }
}


export default App;
