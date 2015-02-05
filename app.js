angular.module('events-app', [])
.controller('EventSchedule', ['$scope', function($scope) {
  $scope.events = [
    {name: 'Learn AngularJS', time: '4:34'}
  ];
  $scope.eventName = '';
  $scope.eventTime = '';
  $scope.addEvent = function() {
    $scope.events.push({
      name: $scope.eventName,
      time: $scope.eventTime
    });
    $scope.eventName = '';
    $scope.eventTime = '';
  }
}])
