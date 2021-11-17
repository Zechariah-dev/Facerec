import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

//pages
const Home = React.lazy(() => import('./components/Home'));
const Compare = React.lazy(() => import('./components/Compare'));
const Login = React.lazy(() => import('./components/Login'));
const CreateStudent = React.lazy(() => import('./components/CreateStudent'));

function App() {
  return (
    <React.Suspense fallback={<h1>Loading</h1>}>
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Home />
            <ScrollToTop />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/compare" component={Compare} />
          <Route path="/signup" component={CreateStudent} />
        </Switch>
      </React.Fragment>
    </React.Suspense>
  );
}

export default App;
