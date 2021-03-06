var app = angular.module('minmax', [
	'jcs-autoValidate',
	'angular-ladda'
]);

app.run(defaultErrorMessageResolver){
	defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages){
		errorMEssages['tooYoung'] = 'You must be at least {0} years old to enter this site';
		errorMEssages['tooOld'] = 'You must not be older than {0} years old to enter this site';
		errorMEssages['badUsername'] = 'Username can only contain numbers and letters and _ ';
	})
};

app.controller('MinMaxCtrl', function ($scope, $http) {
	$scope.formModel = {};
	$scope.submitting = false;
	$scope.submitted = false;
	$scope.has_error = false;



	$scope.onSubmit = function () {
		$scope.submitting = true;
		console.log("Hey i'm submitted!");
		console.log($scope.formModel);

		$http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
			success(function (data) {
				console.log(":)");
				$scope.submitting = false;
				$scope.submitted = true;
				$scope.has_error = false;
			}).error(function(data) {
				console.log(":(");
				$scope.submitting = false;
				$scope.submitted = false;
				$scope.has_error = true;
			});

	};
});
