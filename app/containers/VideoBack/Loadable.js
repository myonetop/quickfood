/**
 *
 * Asynchronously loads the component for VideoBack
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
