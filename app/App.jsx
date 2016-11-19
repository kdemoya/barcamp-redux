/**
 * barcamp-redux | App.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import slides from './reducers/slides';
import container from './containers/PresentationContainer';
import Presentation from './components/Presentation';
import Speaker from './components/Speaker';
import DevTools from './containers/DevTools';

require('../node_modules/highlight.js/styles/monokai.css');

const store = createStore(slides, DevTools.instrument());

/**
 * Spanish:
 * Aquí iniciamos la configuración nuestra applicación,
 * iniciamos Redux y las rutas que usaremos (en este caso, con react-router).
 *
 * English:
 * Here we start our app's config,
 * we start Redux and the routes we will use (with react-router, in the case.
 */
const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/speaker" component={container(Speaker)} />
      <Route path="/" component={container(Presentation)} />
    </Router>
  </Provider>
);

export default App;
