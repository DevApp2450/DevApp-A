'use strict';

var lastId = 0;

angular.module('devAppAeApp')
  .controller('initialSetupCtrl', function ($scope, ngDialog, $http) { 

  		//var data = $http.get('/api/getRepos');
  		//$scope.repoEmail = data.Email;
  		//console.log($http.get('/api/getRepos')); 
    
    $http.get('/api/getRepos').success(function(returnedRepo) {
      console.log(returnedRepo);
      lastId = returnedRepo.length;
      console.log(lastId);
    });


	  	$scope.save = function(){
        var nextId = lastId + 1;
        console.log(nextId);
	  		var json = {repoId: nextId, repoEmail: $scope.repoEmail, repoUsername: $scope.repoUserName, repoPassword: $scope.repoPassword, repoUrl: $scope.repoUrl, repoFolder: $scope.repoFolder};
	  		$http.post('/api/insertRepo', json);
	  		//Save somthing
	  		ngDialog.close();
	  	}	

	  $scope.closeThisDialog = function() {
	  	ngDialog.close();

	  }	
  });