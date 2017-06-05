(function (angular) {
    angular.module('app').factory('cardsFactory', [cardsFactory]);



    function cardsFactory() {
        var module = {};
        var self = module;

        var allCards = [
            { id: 0, name: 'Hulk'   , img: 'hulk.jpg'   , reveal: false , imgReverse: 'reverse.jpg'},
            { id: 1, name: 'Flash'  , img: 'flash.jpg'  , reveal: false , imgReverse: 'reverse.jpg'},
            { id: 2, name: 'Thor'   , img: 'thor.jpg'   , reveal: false , imgReverse: 'reverse.jpg'},
            { id: 3, name: 'Batman' , img: 'batman.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            { id: 4, name: 'Hulk'   , img: 'hulk.jpg'   , reveal: false , imgReverse: 'reverse.jpg'},
            { id: 5, name: 'Flash'  , img: 'flash.jpg'  , reveal: false , imgReverse: 'reverse.jpg'},
            { id: 6, name: 'Thor'   , img: 'thor.jpg'   , reveal: false , imgReverse: 'reverse.jpg'},
            { id: 7, name: 'Batman' , img: 'batman.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            { id: 8, name: 'Black-Widow' , img: 'black-widow.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            { id: 9, name: 'Black-Widow' , img: 'black-widow.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
//            { id: 10, name: 'captain-america' , img: 'captain-america.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 11, name: 'captain-america' , img: 'captain-america.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 12, name: 'green-lantern' , img: 'green-lanterna.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 13, name: 'green-lantern' , img: 'green-lanterna.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 14, name: 'hawk-eye' , img: 'hawk-eye.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 15, name: 'hawk-eye' , img: 'hawk-eye.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 16, name: 'iron-man' , img: 'iron-man.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 17, name: 'iron-man' , img: 'iron-man.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 18, name: 'spider-man' , img: 'spider-man.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 19, name: 'spider-man' , img: 'spider-man.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 20, name: 'superman' , img: 'superman.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
            //{ id: 21, name: 'superman' , img: 'superman.jpg' , reveal: false , imgReverse: 'reverse.jpg'},
        ];

        module.getAllCards = function () {

            shuffleArray(allCards);
            return allCards;
        };

        module.revealById = function (_id_) {

                for (i=0; i<allCards.length;i++) {
                    if (allCards[i].id === _id_) {
                        allCards[i].reveal= true;
                        break;
                    }
                }
        };


        module.random = function () {
            return 0.2 - Math.random();
        };

        var shuffleArray = function (array) {
            var m = array.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
                array[m].reveal = false;
                array[m].img = array[m].name+'.jpg';
                
            }

            return array;
        };

        return module;

    };


})(angular);