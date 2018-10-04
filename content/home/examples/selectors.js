// modules/testModule/selectors.js

import { createSelector, getStateForModule } from 'reacticoon/selector';

// create the `getState` function, that will receive the state for the
// given module.
const getState = getStateForModule('App::TestModule');

export const getToto = createSelector([getState], state =>
  state.get('toto').toJS()
);
