import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage.component'
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';



function App() {
  return (
    <div >
    <Header  />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' component={SignInAndSignUpPage}/>
    </Switch>
    </div>
  );
}

export default App;
