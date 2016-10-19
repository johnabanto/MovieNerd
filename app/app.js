(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(function($urlRouterProvider, $stateProvider) {
            // stating search page will be main 
            $urlRouterProvider.otherwise('/search');
            // defining each states controller and file path
            $stateProvider
                .state('search', {
                    url: '/search',
                    templateUrl: 'app/partials/search.html',
                    controller: 'SearchController as search'
                })
                .state('detail', {
                    url: '/detail?imdbID',
                    templateUrl: 'app/partials/detail.html',
                    controller: 'DetailController as detail'
                });
        });
})();

// Reviewed by Reuven, Tristan and Jesse