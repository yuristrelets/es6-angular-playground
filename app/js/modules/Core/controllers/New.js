import {Controller} from 'lib';

class New extends Controller {
  static get $conf() {
    return {
      name: 'NewController',
      inject: ['$rootScope', '$q'],
      resolve: {}
    }
  }

  init() {
    console.log('-> hello new', this);
  }
}

export default New;