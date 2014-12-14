System.register("modules/Core/module", [], function() {
  "use strict";
  var __moduleName = "modules/Core/module";
  function require(path) {
    return $traceurRuntime.require("modules/Core/module", path);
  }
  var Module = System.get("lib").Module;
  var Controller = System.get("lib").Controller;
  var CoreModule = function CoreModule() {
    $traceurRuntime.superConstructor($CoreModule).apply(this, arguments);
  };
  var $CoreModule = CoreModule;
  ($traceurRuntime.createClass)(CoreModule, {}, {}, Module);
  var CoreController = function CoreController() {
    $traceurRuntime.superConstructor($CoreController).apply(this, arguments);
  };
  var $CoreController = CoreController;
  ($traceurRuntime.createClass)(CoreController, {}, {get $meta() {
      return {di: ['$http']};
    }}, Controller);
  var m = new CoreModule('Core');
  m.controller(CoreController);
  var $__default = m;
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
        ctrl: Ctrl
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
  var _app;
  var _modules = [];
  var Router = function Router() {};
  ($traceurRuntime.createClass)(Router, {}, {});
  var Controller = function Controller() {};
  ($traceurRuntime.createClass)(Controller, {init: function() {}}, {
    get $meta() {
      return {
        di: [],
        route: '',
        resolve: {}
      };
    },
    get $di() {
      return ['$scope'].concat(this.constructor.$meta.di || []);
    },
    $init: function() {
      var me = this.constructor;
      console.dir(this);
    },
    $export: function() {
      return this.constructor.$di.concat(this);
    }
  });
  var Module = function Module(name) {
    var reqs = arguments[1] !== (void 0) ? arguments[1] : [];
    this.module = angular.module(name, reqs);
    _modules.push(this);
  };
  ($traceurRuntime.createClass)(Module, {
    controller: function(ctrl) {
      var conf = ctrl.$meta;
      console.log('controller', conf);
      console.log(ctrl.name);
      ctrl.$init();
    },
    run: function(runner) {}
  }, {});
  var Application = function Application(name, reqs) {
    this.name = name;
    this.reqs = reqs;
  };
  ($traceurRuntime.createClass)(Application, {run: function() {
      this.app = angular.module(this.name, this.reqs);
      _app = this;
    }}, {});
  return {
    get Controller() {
      return Controller;
    },
    get Module() {
      return Module;
    },
    get Application() {
      return Application;
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