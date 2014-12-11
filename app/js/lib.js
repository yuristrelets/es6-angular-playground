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
      defineController(controller, m);
    }
  }

  return {
    name: name
  }
}

export default { defineApp: defineApp, defineModule: defineModule };

export class Controller {
  constructor(...args) {
    let c = Array.prototype.concat('$scope', this.constructor.$conf.inject);

    for(let i = 0, size = args.length; i < size; i++) {
      this[`_${c[i]}`] = args[i];
    }

    this.init();
  }

  init() {}
}