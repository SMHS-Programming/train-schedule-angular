
  /*
    Some new helper functions!
  */

// parse time takes time as a string, returns a date object!
function parseTime(timeAsString) {
  // don't worry about this. just know that it works.
  var d = new Date();
  var time = timeAsString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
  d.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
  d.setMinutes( parseInt(time[2]) || 0 );
  return d;
}

function formatTime() {
  
}
  /*
    You should remeber everything that follows
  */
angular.module('events-app', [])
.controller('EventSchedule', ['$scope', function($scope) {
  $scope.events = [
    {name: 'Learn AngularJS', time: parseTime('4:34'), location: 'Sam\'s house'}
  ];

  $scope.eventName = '';
  $scope.eventTime = '';
  $scope.eventLocation = '';
  $scope.addEvent = function() {

    // parse the time to an event object using the helper at the bottom of the file
    var parsedTime = parseTime($scope.eventTime);

    $scope.events.push({
      name: $scope.eventName,
      time: parsedTime,
      location: $scope.eventLocation
    });
    $scope.eventName = '';
    $scope.eventTime = '';
    $scope.eventLocation = '';
  }


}])
