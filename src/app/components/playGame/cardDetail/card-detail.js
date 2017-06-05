(function(angular) {

  angular.module('app').component('cardDetail', {
    templateUrl:  'app/components/playGame/cardDetail/card-detail-template.html',
    controller:  ['$stateParams', 'cardsFactory', ctrlCardDetail],
    controllerAs: 'cardDetail',
    bindings: {
      itemCard: '<'
    }
  });

  function ctrlCardDetail($stateParams, cardsFactory) {
    var vm = this;

    /* Este método equivale al $( document ).ready() de jQuery.
    En el $onInit seteamos las propiedades de este objeto-controlador (vm, que es this, que es este componente), que le vamos a pasar a la template */
    vm.$onInit = function () {

    };



  }
})(angular);
