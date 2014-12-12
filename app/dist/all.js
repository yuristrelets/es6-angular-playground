System.register("modules/Core/module", [], function() {
  "use strict";
  var __moduleName = "modules/Core/module";
  function require(path) {
    return $traceurRuntime.require("modules/Core/module", path);
  }
  var lib = System.get("lib").default;
  var CoreController = System.get("modules/Core/controllers/Core").default;
  var DD = System.get("modules/Core/directives/Dd").default;
  var DDD = function DDD() {
    $traceurRuntime.superConstructor($DDD).apply(this, arguments);
  };
  var $DDD = DDD;
  ($traceurRuntime.createClass)(DDD, {init: function() {
      $traceurRuntime.superGet(this, $DDD.prototype, "init").call(this);
      this.config.name = 'qwerty';
    }}, {}, DD);
  var core = angular.module('Core', []);
  core.z.controller(CoreController);
  core.z.directive(DDD);
  var $__default = core;
  return {get default() {
      return $__default;
    }};
});

System.register("modules/Core/controllers/Core", [], function() {
  "use strict";
  var __moduleName = "modules/Core/controllers/Core";
  function require(path) {
    return $traceurRuntime.require("modules/Core/controllers/Core", path);
  }
  var Controller = System.get("lib").Controller;
  var Core = function Core() {
    $traceurRuntime.superConstructor($Core).apply(this, arguments);
  };
  var $Core = Core;
  ($traceurRuntime.createClass)(Core, {
    init: function() {
      console.log('-> hello', this);
      this.qwerty = 'qwerty222';
    },
    ccc: function() {
      return 'cool55!';
    }
  }, {get $conf() {
      return {
        name: 'CoreController',
        inject: ['$rootScope', '$http'],
        resolve: {}
      };
    }}, Controller);
  var $__default = Core;
  return {get default() {
      return $__default;
    }};
});

System.register("modules/Core/controllers/New", [], function() {
  "use strict";
  var __moduleName = "modules/Core/controllers/New";
  function require(path) {
    return $traceurRuntime.require("modules/Core/controllers/New", path);
  }
  var Controller = System.get("lib").Controller;
  var New = function New() {
    $traceurRuntime.superConstructor($New).apply(this, arguments);
  };
  var $New = New;
  ($traceurRuntime.createClass)(New, {init: function() {
      console.log('-> hello new', this);
    }}, {get $conf() {
      return {
        name: 'NewController',
        inject: ['$rootScope', '$q'],
        resolve: {}
      };
    }}, Controller);
  var $__default = New;
  return {get default() {
      return $__default;
    }};
});

System.register("modules/Core/directives/Dd", [], function() {
  "use strict";
  var __moduleName = "modules/Core/directives/Dd";
  function require(path) {
    return $traceurRuntime.require("modules/Core/directives/Dd", path);
  }
  var Controller = System.get("lib").Controller;
  var Directive = System.get("lib").Directive;
  var Ctrl = function Ctrl() {
    $traceurRuntime.superConstructor($Ctrl).apply(this, arguments);
  };
  var $Ctrl = Ctrl;
  ($traceurRuntime.createClass)(Ctrl, {init: function() {
      console.log('-> dir controller hello', this);
    }}, {get $conf() {
      return {inject: ['$http']};
    }}, Controller);
  var x = Ctrl;
  var Ctrl222 = function Ctrl222() {
    $traceurRuntime.superConstructor($Ctrl222).apply(this, arguments);
  };
  var $Ctrl222 = Ctrl222;
  ($traceurRuntime.createClass)(Ctrl222, {}, {}, x);
  var DD = function DD() {
    $traceurRuntime.superConstructor($DD).apply(this, arguments);
  };
  var $DD = DD;
  ($traceurRuntime.createClass)(DD, {
    init: function() {
      this.config = {
        name: 'myDir',
        restrict: 'E',
        scope: true,
        replace: true,
        template: '<div class="qwerty">wfwefwef</div>',
        ctrl: Ctrl222
      };
    },
    link: function(scope, el, attrs) {
      console.log(this);
      this.calc();
      el.on('click', (function() {
        alert('!!!');
      }));
    },
    calc: function() {
      console.log('calc');
    }
  }, {}, Directive);
  var $__default = DD;
  return {get default() {
      return $__default;
    }};
});

System.register("lib", [], function() {
  "use strict";
  var __moduleName = "lib";
  function require(path) {
    return $traceurRuntime.require("lib", path);
  }
  if (!angular)
    throw ('Angular is undefined!');
  var originalModule = angular.module;
  angular.module = (function(name, reqs, fn) {
    console.log(name, reqs, fn);
    var result = originalModule(name, reqs, fn);
    result.z = {
      controller: function(ctrl) {
        if (!ctrl || !ctrl.$conf) {
          throw new Error('Bad controller class!');
        }
        console.dir(ctrl.annotate);
        console.log('-> ctrl', ctrl.$conf.name, ctrl.annotate);
        return result.controller(ctrl.$conf.name, ctrl.annotate);
      },
      directive: function(cls) {
        var dir = new cls();
        var fn = (function() {
          return dir.config;
        });
        return result.directive(dir.name, [fn]);
      }
    };
    return result;
  });
  function defineApp(name) {
    var depts = arguments[1] !== (void 0) ? arguments[1] : [];
    var internalDepts = arguments[2] !== (void 0) ? arguments[2] : [];
    for (var $__1 = internalDepts[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__2; !($__2 = $__1.next()).done; ) {
      var dept = $__2.value;
      {
        if (dept.name) {
          depts.push(dept.name);
        } else {
          throw ('Name property not found in dependencies!');
        }
      }
    }
    var app = angular.module(name, depts);
    angular.element(document).ready((function() {
      angular.bootstrap(document, [app.name]);
    }));
  }
  function defineController(ctrl, to) {
    var c = ctrl.$conf;
    var inject = Array.prototype.concat("$scope", c.inject, ctrl);
    console.log(inject);
    to.controller(c.name, inject);
  }
  function defineModule(name) {
    var options = arguments[1] !== (void 0) ? arguments[1] : {};
    var m = angular.module(name, options.depts || []);
    if (options.controllers) {
      for (var $__1 = options.controllers[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__2; !($__2 = $__1.next()).done; ) {
        var controller = $__2.value;
        {
          controller.register(m);
        }
      }
    }
    return {name: name};
  }
  var $__default = {
    defineApp: defineApp,
    defineModule: defineModule
  };
  var Controller = function Controller() {
    for (var args = [],
        $__3 = 0; $__3 < arguments.length; $__3++)
      args[$__3] = arguments[$__3];
    var c = ['$scope'].concat(this.constructor.$conf.inject);
    console.log(this.constructor.$conf.name, c);
    for (var i = 0,
        size = args.length; i < size; i++) {
      this[("$" + c[i].replace('$', ''))] = args[i];
    }
    this.init();
  };
  ($traceurRuntime.createClass)(Controller, {init: function() {}}, {get annotate() {
      var reqs = this.$conf.inject,
          baseReqs = ['$scope'];
      return Array.isArray(reqs) ? baseReqs.concat(reqs, this) : baseReqs.concat(this);
    }});
  var Directive = function Directive() {
    console.log('-> dir hello!');
    this.init();
    if (this.config) {
      this.name = this.config.name;
      console.log('-> dir ctrl', this.config.controller.$conf);
      this.config.link = this.link.bind(this);
      this.config.controller = this.config.controller.annotate;
    }
  };
  ($traceurRuntime.createClass)(Directive, {}, {});
  return {
    get default() {
      return $__default;
    },
    get Controller() {
      return Controller;
    },
    get Directive() {
      return Directive;
    }
  };
});

System.register("app", [], function() {
  "use strict";
  var __moduleName = "app";
  function require(path) {
    return $traceurRuntime.require("app", path);
  }
  var CoreModule = System.get("modules/Core/module").default;
  var lib = System.get("lib").default;
  angular.module('app', [CoreModule.name]);
  angular.element(document).ready((function() {
    angular.bootstrap(document, ['app'], {strictDi: true});
  }));
  return {};
});
System.get("app");
//# sourceMappingURL=maps/all.js.map