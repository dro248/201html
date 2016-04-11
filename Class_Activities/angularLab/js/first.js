var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
	$scope.first = 'first name';
	$scope.last = 'last name';
	$scope.heading = 'Message: ';
	$scope.updateMessage = function() {
		$scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
	};
});