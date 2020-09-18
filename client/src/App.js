import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute';
import Login from "./components/Login";
import Bubbles from './components/BubblePage'
import Colors from './components/Colors'
import Navigation from './components/Nav'
import AddColor from './components/AddColor'

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <PrivateRoute path='/colors' component={Colors} />
        <PrivateRoute path='/addcolor' component={AddColor} />
        <PrivateRoute path='/bubbles' component={Bubbles} />

        <Route exact path='/' component={Login} />
      </Switch>
    </>
  );
}

export default App;
