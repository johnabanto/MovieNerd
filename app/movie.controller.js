(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

        SearchController.$inject = ['MovieFactory', '$stateParams'];

        /* @ngInject */
        function SearchController(MovieFactory, $stateParams) {
            var vm = this;
             vm.movie = ''; //  '' search movie title input from user
            
            // function to pull results when button is clicked
            vm.inputResults = function(movies) {

                // get data from the factory
                MovieFactory.getMovieData(movies).then(
                function(data) {
                    vm.movieData = data;
                    console.log(data);
                },
                function(error) {});
            };
        }
})();

// Reviewed by Reuven, Tristan and Jesse