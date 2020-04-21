import React from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import Details from "./components/Details"
import {Switch, Route} from "react-router-dom"
import Default from "./components/Default"




function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
