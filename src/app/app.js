'use strict';

(function (angular) {
  /* Declaramos el módulo e inyectamos el router*/
  // npm install --save angular-ui-router
  angular.module('app', ['ui.router']);

  // Definimos la configuración del proyecto durante la fase CONFIG
  // Necesitamos inyectar algunos "providers" del router
  // Declaramos tantos estados como pantallas tengamos
  angular.module('app').config(['$stateProvider', '$urlRouterProvider', appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {

    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

      var about = {
      name: 'about',
      url: '/about',
      template: '<view-about></view-about>'
    };

      var player = {
      name: 'player',
      url: '/player',
      template: '<view-player></view-player>'
    };

      var playGame = {
      name: 'playGame',
      url: '/playGame',
      params: {
        player: { squash: true, value: null }
      },
      template: '<play-game></play-game>'
    };

    $stateProvider.state(main);
    $stateProvider.state(about);
    $stateProvider.state(player);
    $stateProvider.state(playGame);


    // Definimos una ruta por defecto
    $urlRouterProvider.otherwise('/main');

  };




})(angular);