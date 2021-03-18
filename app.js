import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Menu from './menu/menu.js';
import MapDisplay from './map/mapDisplay.js'
import Hello from './helloPage/hello.js'


class App extends Component {
  render () {
    return (
      <Router history={createHistory()}>
      <div>
        <Menu />
        <Switch>
            <Route path='/' exact component={Hello} />
            <Route path='/Map' component={MapDisplay} />
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
