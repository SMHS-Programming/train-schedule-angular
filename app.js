angular.module('train-app', [])
.controller('TrainSchedule', ['$scope', function($scope) {
  $scope.trainTimes = [
    {name: 'Palo Alto', time: '15 minutes'},
    {name: 'San Francisco', time: '20 minutes'},
    {name: 'Mountain View', time: '30 minutes'}
  ];
}]);
