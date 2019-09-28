import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Profile from '../components/Profile';
import ProductPage from '../components/Products';
import Index from '../components';
import SearchResponse from '../components/SearchResponse';
import cart from '../components/cart';

const routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/articles" component={ProductPage} />
    <Route exact path="/search" component={SearchResponse} />
    <Route exact path="/cart" component={cart} />
    <Route path="/" component={Index} />
  </Switch>
);

export default routes;