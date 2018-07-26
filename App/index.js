/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HeaderPage from 'containers/HeaderPage/Loadable';
import VideoBack from 'containers/VideoBack/Loadable';
import StaticImage from 'containers/StaticImage/Loadable';


export default function App() {
  return (
    <div>
      <Route component={HeaderPage} />
      <Switch>
        <Route exact path="/" component={VideoBack} />
        <Route exact path="/staticimage" component={StaticImage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
