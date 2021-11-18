import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

//pages
import Home from './components/Home';
import Compare from './components/Compare';
import Login from './components/Login';
import CompareUpload from './components/CompareUpload';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
          <ScrollToTop />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/compare" component={Compare} />
        <Route path="/compare-upload" component={CompareUpload} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
