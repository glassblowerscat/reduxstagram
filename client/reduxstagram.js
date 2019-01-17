import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import * as Sentry from '@sentry/browser';
import ErrorBoundary from './components/ErrorBoundary';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

Sentry.init({
  dsn: 'https://6c4c1f3cbca1444d8ec274f533bb292df6ca0a1829b2455891c4743abf9ec66c@sentry.io/<project>'
});

const router = (
  <ErrorBoundary>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={PhotoGrid}></IndexRoute>
          <Route path="/view/:postId" component={Single}></Route>
        </Route>
      </Router>
    </Provider>
  </ErrorBoundary>
)

render(router, document.getElementById('root'))