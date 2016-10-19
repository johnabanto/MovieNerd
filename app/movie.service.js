(function() {
    'use strict';

    angular
       .module('app')
       .factory('MovieFactory', MovieFactory);
        // Inject the dependencies within the Factory
        MovieFactory.$inject = ['$http'];

        /* @ngInject */
        function MovieFactory($http) {
            var service = {
                getMovieData: getMovieData,
                getDetailsData: getDetailsData
           };
            return service;

           ////////////////

            function getMovieData(movieName) {
                // get method to pull movie name from api
                return $http.get('http://www.omdbapi.com/?s=' + movieName);
           }
          	function getDetailsData(movieDetails) {
                // get method to pull movie details from api
                return $http.get('http://www.omdbapi.com/?i=' + movieDetails);
            }
        }
})();

// Reviewed by Reuven, Tristan and Jesse