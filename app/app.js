(function(){var app = angular.module('gym', ['ui.router', 'firebase'])})();

    
angular.module('gym').config(function($stateProvider){
    
    $stateProvider
        .state('home',{
        url: '',
        template: '<gym-service></gym-service>'
        })
});