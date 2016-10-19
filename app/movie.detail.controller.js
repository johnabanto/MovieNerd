(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

        DetailController.$inject = ['MovieFactory', '$stateParams'];

        /* @ngInject */
        function DetailController(MovieFactory, $stateParams) {
            var vm = this; 
            vm.details = $stateParams.imdbID;
    
            vm.detailResults = function(details) {

                // function to get details when button is clicked
                MovieFactory.getDetailsData($stateParams.imdbID).then(
                    function(data) {
                        vm.detailsData = data;
                    },
                    function(error) {});
                };
                vm.detailResults();
        }   
})();