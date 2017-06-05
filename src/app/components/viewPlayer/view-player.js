(function(angular) {

  angular.module('app').component('viewPlayer', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/viewPlayer/view-player-template.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state', '$scope', ctrlviewPlayer],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'viewPlayer',
        bindings: {
      avatarClick: '<'
    }

  });

 /* En esta función escribimos la lógica del controlador */
  function ctrlviewPlayer($state, $scope) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    vm.valuesOK = true;
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function() {

     }

    vm.goToMain = function() {
      $state.go('main');
     }

    vm.goToPlay = function(_player_) {
      vm.avatar = vm.avatarClick;
console.log(vm.avatarClick);
      
      if(!vm.name || !vm.avatar) {
        vm.valuesOK = false ;
      } else {
        vm.valuesOK = true;
      }

      if (vm.valuesOK) {
        player={
          name: _player_,
          avatar:vm.avatar,
        };
       $state.go('playGame', { player: player});
      }
     }
  }

  })(angular);