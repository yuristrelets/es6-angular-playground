import {Controller} from 'lib';
import {Directive} from 'lib';

class Ctrl extends Controller {
  static get $conf() {
    return {
      inject: ['$http']
    }
  }

  init() {
    console.log('-> dir controller hello', this);
  }
}

let x = Ctrl;

class Ctrl222 extends x {

}

class DD extends Directive {
  init() {
    this.config = {
      name: 'myDir',
      restrict: 'E',
      scope: true,
      replace: true,
      template: '<div class="qwerty">wfwefwef</div>',
      ctrl: Ctrl222
    }
  }

  link(scope, el, attrs) {
    console.log(this);

    this.calc();

    el.on('click', () => {
      alert('!!!');
    });
  }

  calc() {
    console.log('calc');
  }
}

export default DD;