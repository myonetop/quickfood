import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the videoBack state domain
 */

const selectVideoBackDomain = state => state.get('videoBack', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by VideoBack
 */

const makeSelectVideoBack = () =>
  createSelector(selectVideoBackDomain, substate => substate.toJS());

export default makeSelectVideoBack;
export { selectVideoBackDomain };
