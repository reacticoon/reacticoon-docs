// modules/testModule/actions.js

import { createAction } from 'reacticoon/action';

// we create an action, that receive a single argument `totoValue`

export const testAction = createAction(
  'TestModule::testAction', // action name
  (totoValue = 42) => ({
    toto: totoValue,
  })
);
