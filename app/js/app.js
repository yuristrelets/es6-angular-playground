import CoreModule from './modules/Core/module';

import lib from './lib';
//lib.defineApp('app', [], [CoreModule]);

angular.module('app', [CoreModule.name]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'], { strictDi: true });
});