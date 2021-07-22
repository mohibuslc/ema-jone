import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Review from '../src/Components/Review/Review';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfind from './Components/Notfind/Notfind';
import Productdetails from './Components/productDetails/Productdetails';

function App() {
  return (
    <div>

<Header></Header>
      <Router>

        <Switch>
          <Route path="/shop">
          
          <Shop></Shop>
          </Route>
          <Route path ="/Order">
         <Review></Review>
          </Route>
          <Route path="/product/:productKey">
            <Productdetails></Productdetails>
          </Route>
          <Route exact path="*">
            <Notfind></Notfind>
          </Route>
          </Switch>
      </Router>
      
           </div>
  );
}

export default App;
