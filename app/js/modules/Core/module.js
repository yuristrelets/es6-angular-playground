import lib from 'lib';

import CoreController from './controllers/Core';
import NewController from './controllers/New';

export default lib.defineModule('Core', {
  depts: [],
  config: [],
  controllers: [CoreController, NewController],
  directives: [],
  filters: [],
  factories: [],
  resources: [],
  services: []
});