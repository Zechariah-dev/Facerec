import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

//pages
const Home = React.lazy(() => import('./components/Home'));
const Signin = React.lazy(() => import('./components/Signin'));
const Login = React.lazy(() => import('./components/Login'));

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
          <Route path="/signin" component={Signin} />
        </Switch>
      </React.Fragment>
    </React.Suspense>
  );
}

export default App;
