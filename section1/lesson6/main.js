var app = angular.module('minmax', [
	'jcs-autoValidate'
]);

/*
angular.module('jcs-autoValidate').run([
	'defaultErrorMessageResolver',
	function (validator, defaultErrorMessageResolver) {
	defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
		errorMessages['tooYoung'] = 'You must be at least {0} years old to enter this site';
		errorMessages['tooOld'] = 'You must not be older than {0} years old to enter this site';
		errorMessages['badUsername'] = 'Username can only contain numbers and letters and _ ';
	});
}]);
*/

app.run( function(defaultErrorMessageResolver){
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages){
		errorMessages['tooYoung'] = 'You must be at least {0} years old to enter this site';
		errorMessages['tooOld'] = 'You must not be older than {0} years old to enter this site';
		errorMessages['badUsername'] = 'Username can only contain numbers and letters and _ ';
	});
} );

app.controller('MinMaxCtrl', function ($scope, $http) {
	$scope.formModel = {};

	$scope.onSubmit = function () {

			console.log("Hey I'm submitted!");
			console.log($scope.formModel);

		 $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
				success(function (data) {
					console.log(":)")
				}).error(function(data) {
					console.log(":(")
				});

	};
});
