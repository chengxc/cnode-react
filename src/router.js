/* eslint-disabled */
import React from 'react';
/* eslint-disabled */
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Topic from './components/Topic/Topic';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/topic/:id" exact component={Topic} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
