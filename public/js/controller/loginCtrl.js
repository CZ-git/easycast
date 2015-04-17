function LoginCtrl($scope, $filter, ngTableParams, Dashboard, Layout, Graph, $timeout){
	$scope.title = "Login";
	var data;
	$scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      $http.post('/login', {email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{
          $state.go('/login');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };

}