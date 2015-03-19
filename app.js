angular.module('events-app', [])
.controller('EventSchedule', ['$scope', function($scope) {
  $scope.events = [
    {name: 'Learn AngularJS', time: '4:34', location: 'Sam\'s house'}
  ];
  $scope.eventName = '';
  $scope.eventTime = '';
  $scope.eventLocation = '';
  $scope.addEvent = function() {
    $scope.events.push({
      name: $scope.eventName,
      time: $scope.eventTime,
      location: $scope.eventLocation
    });
    $scope.eventName = '';
    $scope.eventTime = '';
    $scope.eventLocation = '';
  }
}])
