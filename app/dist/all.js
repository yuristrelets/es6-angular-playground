System.register("modules/Core/module", [], function() {
  "use strict";
  var __moduleName = "modules/Core/module";
  function require(path) {
    return $traceurRuntime.require("modules/Core/module", path);
  }
  var lib = System.get("lib").default;
  var CoreController = System.get("modules/Core/controllers/Core").default;
  var NewController = System.get("modules/Core/controllers/New").default;
  var $__default = lib.defineModule('Core', {
    depts: [],
    config: [],
    controllers: [CoreController, NewController],
    directives: [],
    filters: [],
    factories: [],
    resources: [],
    services: []
  });
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
  ($traceurRuntime.createClass)(Core, {init: function() {
      console.log('hello', this);
      this.qwerty = 'qwerty';
    }}, {get $conf() {
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
      console.log('hello new', this);
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

System.register("lib", [], function() {
  "use strict";
  var __moduleName = "lib";
  function require(path) {
    return $traceurRuntime.require("lib", path);
  }
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
          defineController(controller, m);
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
    var c = Array.prototype.concat('$scope', this.constructor.$conf.inject);
    for (var i = 0,
        size = args.length; i < size; i++) {
      this[("_" + c[i])] = args[i];
    }
    this.init && this.init();
  };
  ($traceurRuntime.createClass)(Controller, {}, {});
  return {
    get default() {
      return $__default;
    },
    get Controller() {
      return Controller;
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
  lib.defineApp('app', [], [CoreModule]);
  return {};
});
System.get("app");
//# sourceMappingURL=maps/all.js.map