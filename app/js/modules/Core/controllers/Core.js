import {Controller} from 'lib';

class Core extends Controller {
  static get $conf() {
    return {
      name: 'CoreController',
      inject: ['$rootScope', '$http'],
      resolve: {}
    }
  }

  init() {
    console.log('-> hello', this);

    this.qwerty = 'qwerty222';
  }

  ccc() {
    return 'cool55!';
  }
}

export default Core;