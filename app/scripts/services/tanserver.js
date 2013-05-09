/*global angular*/

'use strict';

angular.module('easyTanApp').factory('tanServer', ['$resource', function ($resource) {
  var tanServer = {};

  var Arrets = $resource('https://open.tan.fr/ewp/arrets.json', {});

  tanServer.getArrets = function (ligneShortName) {
    var arrets = [];

    Arrets.query({}, function (arretsResponse) {
      var i = 0;
      for (i = 0; i < arretsResponse.length; i++) {
        var anArret = arretsResponse[i];

        var j = 0;
        for (j = 0; j < anArret.ligne.length; j++) {
          var aLigne = anArret.ligne[j];
          if (aLigne === ligneShortName) {
            var newArray = {
              codeLieu: anArret.codeLieu,
              libelle: anArret.libelle
            };
            arrets.push(newArray);
          }
        }
      }
    });

    return arrets;
  };

  var Lignes = $resource('/scripts/data/lignes.json', {});

  tanServer.getLigne = function (ligneShortName) {
    var ligne = {};

    Lignes.query({}, function (lignesResponse) {
      var i = 0;
      for (i = 0; i < lignesResponse.length; i++) {
        var aLigne = lignesResponse[i];
        if (aLigne.route_short_name === ligneShortName) {
          ligne.route_id = aLigne.route_id;
          ligne.route_short_name = aLigne.route_short_name;
          ligne.route_long_name = aLigne.route_long_name;
          ligne.route_desc = aLigne.route_desc;
          ligne.route_type = aLigne.route_type;
        }
      }
    });

    return ligne;
  };

  tanServer.getTramways = function () {
    var tramways = [];

    Lignes.query({}, function (lignesResponse) {
      var i = 0;
      for (i = 0; i < lignesResponse.length; i++) {
        var aLigne = lignesResponse[i];
        if (aLigne.route_type === 1) {
          var newLigne = {
            'route_id': aLigne.route_id,
            'route_short_name': aLigne.route_short_name,
            'route_long_name': aLigne.route_long_name,
            'route_desc': aLigne.route_desc,
            'route_type': aLigne.route_type
          };

          tramways.push(newLigne);
        }
      }
    });

    return tramways;
  };

  tanServer.getBusways = function () {
    var busways = [];

    Lignes.query({}, function (lignesResponse) {
      var i = 0;
      for (i = 0; i < lignesResponse.length; i++) {
        var aLigne = lignesResponse[i];
        if (aLigne.route_type === 2) {
          var newLigne = {
            'route_id': aLigne.route_id,
            'route_short_name': aLigne.route_short_name,
            'route_long_name': aLigne.route_long_name,
            'route_desc': aLigne.route_desc,
            'route_type': aLigne.route_type
          };

          busways.push(newLigne);
        }
      }
    });

    return busways;
  };

  tanServer.getBuses = function () {
    var buses = [];

    Lignes.query({}, function (lignesResponse) {
      var i = 0;
      for (i = 0; i < lignesResponse.length; i++) {
        var aLigne = lignesResponse[i];
        if (aLigne.route_type === 3) {
          var newLigne = {
            'route_id': aLigne.route_id,
            'route_short_name': aLigne.route_short_name,
            'route_long_name': aLigne.route_long_name,
            'route_desc': aLigne.route_desc,
            'route_type': aLigne.route_type
          };

          buses.push(newLigne);
        }
      }
    });

    return buses;
  };

  tanServer.getNavibuses = function () {
    var navibuses = [];

    Lignes.query({}, function (lignesResponse) {
      var i = 0;
      for (i = 0; i < lignesResponse.length; i++) {
        var aLigne = lignesResponse[i];
        if (aLigne.route_type === 4) {
          var newLigne = {
            'route_id': aLigne.route_id,
            'route_short_name': aLigne.route_short_name,
            'route_long_name': aLigne.route_long_name,
            'route_desc': aLigne.route_desc,
            'route_type': aLigne.route_type
          };

          navibuses.push(newLigne);
        }
      }
    });

    return navibuses;
  };

  return tanServer;
}]);
