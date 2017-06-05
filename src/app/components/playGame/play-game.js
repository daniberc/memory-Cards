(function(angular) {

  angular.module('app').component('playGame', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/playGame/play-game-template.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state', '$stateParams', ctrlplayGame],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'playGame',
    bindings: {
      player: '<',

     
    }
  });

 /* En esta función escribimos la lógica del controlador */
  function ctrlplayGame($state, $stateParams) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {
      vm.player = $stateParams.player;
    }

  }

  })(angular);