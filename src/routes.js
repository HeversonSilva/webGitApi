import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repository from './pages/Repository';
import Howto from './pages/Howto';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repository" component={Repository} />
        <Route path="/howto" component={Howto} />
      </Switch>
    </BrowserRouter>
  );
}
