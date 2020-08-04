import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage.component'
import './App.css';
import ShopPage from './pages/shop/shop.component';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);
function App() {
  return (
    <div >
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
