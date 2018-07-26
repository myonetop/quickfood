import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the headerPage state domain
 */

const selectHeaderPageDomain = state => state.get('headerPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HeaderPage
 */

const makeSelectHeaderPage = () =>
  createSelector(selectHeaderPageDomain, substate => substate.toJS());

export default makeSelectHeaderPage;
export { selectHeaderPageDomain };
