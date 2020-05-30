import React from 'react';
import { Provider } from 'react-redux';
import { Switch, withRouter, Route } from 'react-router-dom';
import 'static/styles/index.scss';
import Home from 'pages/Home';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <Switch>
        <Route component={Home} path="/home" />
      </Switch>
    </div>
  </Provider>
);

export default withRouter(App);
