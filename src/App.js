import React from "react";
import { Switch, Route } from "react-router-dom";

//pages
const Home = React.lazy(() => import("./components/Home"));
const Signup = React.lazy(() => import("./components/Signup"));
const Login = React.lazy(() => import("./components/Login"))

function App() {
  return (
    <React.Suspense fallback={<h1>Loading</h1>}>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </React.Fragment>
    </React.Suspense>
  );
}

export default App;
