import lib from 'lib';

import CoreController from './controllers/Core';
//import NewController from './controllers/New';
import DD from './directives/Dd';




class DDD extends DD {
  init() {
    super.init();

    this.config.name = 'qwerty';
  }
}

/*
export default lib.defineModule('Core', {
  depts: [],
  config: [],
  controllers: [CoreController],
  directives: [],
  filters: [],
  factories: [],
  resources: [],
  services: []
});*/

var core = angular.module('Core', []);
core.z.controller(CoreController);
core.z.directive(DDD);

export default core;