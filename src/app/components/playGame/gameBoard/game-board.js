(function (angular) {

  angular.module('app').component('gameBoard', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/playGame/gameBoard/game-board-template.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state', '$timeout', 'cardsFactory', ctrlGameBoard],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'gameBoard'

  });

  /* En esta función escribimos la lógica del controlador */
  function ctrlGameBoard($state, $timeout, cardsFactory) {
    /* Cacheamos this para evitar rarismos */
    var vm = this;
    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function () {
      vm.boardCards = cardsFactory.getAllCards();
      vm.cardsSelected = 0;
      vm.previousCard = '';
      vm.actualCard = '';
      
      vm.pointsOK = 0;
      vm.pointsKO = 0;
      
    };

    // Al clicar sobre un elemento de la lista, nos vamos al detalle
    vm.goToDetail = function (_card_) {
      console.log('previa: ', vm.previousCard, 'actual: ', vm.actualCard);
      
      
      if (!vm.previousCard || !vm.actualCard ) {
        console.log('reveal: ', _card_.reveal, 'id ', _card_.id);
        vm.actualCard = _card_;

        if (!vm.actualCard.reveal) {
          console.log("Carta elegida: ", vm.actualCard.id, ' - ', vm.actualCard.name);
          cardsFactory.revealById(vm.actualCard.id);

          // Si no había carta previa
          if (vm.previousCard) {
            compareCards();
          } else {
            vm.previousCard = vm.actualCard;
            vm.actualCard = '';
            console.log('previous: ', vm.previousCard);
          }
        }
      }
    };

    // Se comparan las 2 cartas seleccionadas
    compareCards = function () {
      console.log('comparando: ', vm.previousCard, vm.actualCard);
      if (vm.actualCard.name === vm.previousCard.name) {
        // Las cartas son iguales
        console.log('CARTAS IDENTICAS');
        $timeout(pauseSuccess, 1500);
        vm.pointsOK = vm.pointsOK +10 ;
      } else {
        console.log('FALLO');
        $timeout(pauseFail, 1500);
        vm.pointsKO ++;
      }
    };

    pauseFail = function () {
      console.log('pausando ');
      vm.actualCard.reveal = false;
      vm.previousCard.reveal = false;
      vm.previousCard = '';
      vm.actualCard = '';
    };

    pauseSuccess = function () {

      console.log('pausando ');
      vm.actualCard.img = 'no-card.png';
      vm.previousCard.img = 'no-card.png';
      vm.previousCard = '';
      vm.actualCard = '';
    };

  }

})(angular);