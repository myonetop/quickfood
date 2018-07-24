/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';
// Import Main myone
import Myone from 'myone';
// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */
// Load css files
import '!file-loader?name=[name].[ext]!./css/animate.min.css';
import '!file-loader?name=[name].[ext]!./css/bootstrap.min.css';
import '!file-loader?name=[name].[ext]!./css/menu.css';
import '!file-loader?name=[name].[ext]!./css/style.css';
import '!file-loader?name=[name].[ext]!./css/responsive.css';
import '!file-loader?name=[name].[ext]!./css/elegant_font/elegant_font.min.css';
import '!file-loader?name=[name].[ext]!./css/fontello/css/fontello.min.css';
import '!file-loader?name=[name].[ext]!./css/magnific-popup.css';
import '!file-loader?name=[name].[ext]!./css/pop_up.css';
import '!file-loader?name=[name].[ext]!./css/custom.css';

// Load Javascript files
import 'file-loader?name=[name].[ext]!./js/modernizr.js';
import 'file-loader?name=[name].[ext]!./js/jquery-2.2.4.min.js';
import 'file-loader?name=[name].[ext]!./js/common_scripts_min.js';
import 'file-loader?name=[name].[ext]!./js/functions.js';
import 'file-loader?name=[name].[ext]!./assets/validate.js';
import 'file-loader?name=[name].[ext]!./js/video_header.js';

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import './global-styles';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

// Main Pages
ReactDOM.render(<Myone />, document.getElementById('myone'));
