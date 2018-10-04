// index.js

// Root index of your application.

import { Application } from 'reacticoon/archi';

//
// options
//

import environment from './config/Config';
import modules from './config/modules';
import plugins from './config/plugins';
import routes from './config/routes';

const appOptions = {
  environment,
  modules,
  plugins,
  routes,
};

Application(appOptions);
