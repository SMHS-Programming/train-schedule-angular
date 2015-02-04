angular.module('train-app', [])
.controller('TrainSchedule', ['$scope', function($scope) {
  $scope.trainTimes = [
    {name: 'Palo Alto'},
    {name: 'San Francisco'},
    {name: 'Mountain View'}
  ];
}]);
