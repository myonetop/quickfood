import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the staticImage state domain
 */

const selectStaticImageDomain = state => state.get('staticImage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by StaticImage
 */

const makeSelectStaticImage = () =>
  createSelector(selectStaticImageDomain, substate => substate.toJS());

export default makeSelectStaticImage;
export { selectStaticImageDomain };
