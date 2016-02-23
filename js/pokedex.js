var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

var pokeApiUrl = "http://pokeapi.co/"

var app = angular.module("pokedex", []);

app.controller("pokedexCtrl", function($scope, $log) {
    $scope.$log = $log;
        $scope.pokemons = [
            {value: 0, displayName: 'Pikatchu'},
            {value: 1, displayName: 'Salameche'},
            {value: 2, displayName: 'Rondoudou'},
            {value: 3, displayName: 'Carapuce'},
            {value: 4, displayName: 'Bulbizarre'},
        ]

});