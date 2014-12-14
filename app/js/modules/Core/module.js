//import lib from 'lib';

//import CoreController from './controllers/Core';
//import NewController from './controllers/New';
//import DD from './directives/Dd';

import {Module} from 'lib';
import {Controller} from 'lib';

class CoreModule extends Module {}

class CoreController extends Controller {
  static get $meta() {
    return {
      di: ['$http']
    }
  }
}



var m = new CoreModule('Core');

m.controller(CoreController);




/*var core = angular.module('Core', []);
core.z.controller(CoreController);
core.z.directive(DD);*/

export default m;