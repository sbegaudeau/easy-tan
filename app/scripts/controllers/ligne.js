/*global angular*/

'use strict';

angular.module('easyTanApp')
  .controller('LigneCtrl', ['$scope', '$routeParams', 'tanServer', function ($scope, $routeParams, tanServer) {
    var ligneShortName = $routeParams.ligne;

    $scope.ligne = tanServer.getLigne(ligneShortName);
    $scope.arrets = tanServer.getArrets(ligneShortName);
  }]);
