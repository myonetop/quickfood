import { fromJS } from 'immutable';
import videoBackReducer from '../reducer';

describe('videoBackReducer', () => {
  it('returns the initial state', () => {
    expect(videoBackReducer(undefined, {})).toEqual(fromJS({}));
  });
});
