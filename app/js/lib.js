if(!angular) throw('Angular is undefined!');

var _app;
var _modules = [];

class Router {

}

export class Controller {
  constructor() {

  }

  init() {}

  static get $meta() {
    return {
      di: [],
      route: '',
      resolve: {}
    }
  }

  static get $di() {
    return ['$scope'].concat(this.constructor.$meta.di || []);
  }

  static $init() {
    let me = this.constructor;

    console.dir(this);
  }

  static $export() {
    return this.constructor.$di.concat(this);
  }
}

export class Module {
  constructor(name, reqs = []) {
    this.module = angular.module(name, reqs);

    _modules.push(this);
  }

  controller(ctrl) {
    let conf = ctrl.$meta;

    console.log('controller', conf);
    console.log(ctrl.name);

    ctrl.$init();

    //this.module.controller(conf.name, ctrl.$export());
  }

  run(runner) {

  }
}

export class Application {
  constructor(name, reqs) {
    this.name = name;
    this.reqs = reqs;
  }

  run() {
    this.app = angular.module(this.name, this.reqs);

    _app = this;
  }
}
























/*
var originalModule = angular.module;

angular.module = (name, reqs, fn) => {
  console.log(name, reqs, fn);

  let result = originalModule(name, reqs, fn);

  result.z = {
    controller(ctrl) {
      if(!ctrl || !ctrl.$conf) {
        throw new Error('Bad controller class!');
      }

      console.dir(ctrl.annotate);
      console.log('-> ctrl', ctrl.$conf.name, ctrl.annotate);

      return result.controller(ctrl.$conf.name, ctrl.annotate);
    },

    directive: function(cls) {
      let dir = new cls();
      let fn = () => { return dir.config; };

      return result.directive(dir.name, [fn]);
    }
  };

  return result;
};






function defineApp(name, depts = [], internalDepts = []) {
  for(let dept of internalDepts) {
    if(dept.name) {
      depts.push(dept.name);
    } else {
      throw('Name property not found in dependencies!');
    }
  }

  let app = angular.module(name, depts);


  angular.element(document).ready(() => {
    angular.bootstrap(document, [ app.name ]);
  });


}

function defineController(ctrl, to) {
  let c = ctrl.$conf;
  let inject = Array.prototype.concat("$scope", c.inject, ctrl);

  console.log(inject);

  to.controller(c.name, inject);
}

function defineModule(name, options = {}) {
  var m = angular.module(name, options.depts || []);

  if(options.controllers) {
    for(let controller of options.controllers) {
      //defineController(controller, m);
      controller.register(m);
    }
  }

  return {
    name: name
  }
}

export default { defineApp: defineApp, defineModule: defineModule };

export
class Controller {
  constructor(...args) {
    console.log(this.constructor);
    let c = ['$scope'].concat(this.constructor.$conf.inject);

    for(let i = 0, size = args.length; i < size; i++) {
      this[`$${c[i].replace('$','')}`] = args[i];
    }

    this.init();
  }

  init() {}

  static get annotate() {
      console.log('==================');
      console.dir(this);
    let
      reqs = this.$conf.inject,
      baseReqs = ['$scope'];

    return Array.isArray(reqs) ? baseReqs.concat(reqs, this) : baseReqs.concat(this);
  }
}

export
class Directive {
  constructor() {
    console.log('-> dir hello!');

    this.init();

    if(this.config) {
      this.name = this.config.name;
      console.log('-> dir ctrl', this.config.controller.$conf);
      this.config.link = this.link.bind(this);
      this.config.controller = this.config.controller.annotate;


    }
  }
}*/