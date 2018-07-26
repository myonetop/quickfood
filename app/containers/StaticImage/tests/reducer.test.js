import { fromJS } from 'immutable';
import staticImageReducer from '../reducer';

describe('staticImageReducer', () => {
  it('returns the initial state', () => {
    expect(staticImageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
