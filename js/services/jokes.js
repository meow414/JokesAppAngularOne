app.factory('jokes', ['$http', function($http) {

  return $http.get('http://api.icndb.com/jokes/random/25&callback=jsonp')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);//this can be mentioned as dependency in MainController and used to call success and store result in a property of MainController
