var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
    $scope.teamData = teamData;
    $scope.newGame = {};
    $scope.showNewGameForm = false;
    
    $scope.toggleNewGameForm = function(){
        if (!$scope.showNewGameForm) {
            $scope.showNewGameForm = true;
        } else {
            $scope.showNewGameForm = false;
        }
    }
    
    if ($routeParams.team === 'utahjazz') {
        $scope.homeTeam = 'Utah Jazz';
        $scope.logoPath = 'images/jazz-logo.png';
    }else if ($routeParams.team === 'losangeleslakers') {
        $scope.homeTeam = 'Los Angeles Lakers';
        $scope.logoPath = 'images/lakers-logo.png';
    }else if ($routeParams.team === 'miamiheat') {
        $scope.homeTeam = 'Miami Heat';
        $scope.logoPath = 'images/heat-logo.png';
    }
    $scope.submitGame = function() {
      $scope.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
      teamService.addNewGame($scope.newGame).then(function() {
          teamService.getTeamData($scope.newGame.homeTeam).then(function(res){
              $scope.teamData = res;
              $scope.newGame = {};
              $scope.showNewGameForm = false;
              console.log($scope.teamData);
          });
      });
    };
    
});