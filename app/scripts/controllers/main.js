/*global angular*/

'use strict';

angular.module('easyTanApp')
  .controller('MainCtrl', ['$scope', 'tanServer', function ($scope, tanServer) {
    $scope.tramways = [];
    $scope.busways = [];
    $scope.buses = [];
    $scope.navibuses = [];

    var initializeScope = function () {
      $scope.tramways = tanServer.getTramways();
      $scope.busways = tanServer.getBusways();
      $scope.buses = tanServer.getBuses();
      $scope.navibuses = tanServer.getNavibuses();
    };

    initializeScope();
  }]);
