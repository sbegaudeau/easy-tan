/*global angular*/

'use strict';

angular.module('easyTanApp', ['ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lignes/:ligne', {
        templateUrl: 'views/ligne.html',
        controller: 'LigneCtrl'
      })
      .when('/arrets/:arret', {
        templateUrl: 'views/arret.html',
        controller: 'ArretCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
