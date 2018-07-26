/**
 *
 * Asynchronously loads the component for StaticImage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
