var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, jazzData, lakerData, heatData){
    $scope.jazzData = jazzData;
    $scope.lakerData = lakerData;
    $scope.heatData = heatData;
    $scope.logoPathJ = 'images/jazz-logo.png';
    $scope.logoPathL = 'images/lakers-logo.png';
    $scope.logoPathM = 'images/heat-logo.png';
});