// modules/testModule/reducer.js

import { createReducer } from 'reacticoon/reducer';

import { testAction } from './actions';

const INITIAL_STATE = {
  toto: null,
};

const handleTestAction = (state, action) => state.set('toto', action.toto);

const testModuleReducer = createReducer(INITIAL_STATE, {
  [testAction]: handleTestAction,
});

export default testModuleReducer;
