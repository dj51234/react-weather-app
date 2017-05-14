import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

// Load Foundation
import 'foundation-sites/dist/css/foundation.min.css';
$(document).foundation();
// Load styles
import '../styles/main.scss';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <Route path='examples' component={Examples}></Route>
        <Route path='about' component={About}></Route>
        <IndexRoute component={Weather}/>
      </Route>
    </Router>
  )
};

render(<Root />, document.querySelector('#app'));
