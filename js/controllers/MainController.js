app.controller('MainController',['$scope','jokes',function($scope,jokes) {
jokes.success(function(data) {
    $scope.jokes=data;
  });
}]);
