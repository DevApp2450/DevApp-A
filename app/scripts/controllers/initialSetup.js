'use strict';

angular.module('devAppAeApp')
  .controller('initialSetupCtrl', function ($scope, ngDialog, $http) { 

  		//var data = $http.get('/api/getRepos');
  		//$scope.repoEmail = data.Email;
  		//console.log($http.get('/api/getRepos')); 

  		$http.get('/api/getRepos').success(function(returnedRepo) {
  			console.log(returnedRepo);
  			$scope.repoEmail = returnedRepo.Email;
  			$scope.repoUserName = returnedRepo.Username;
  			$scope.repoPassword = returnedRepo.Password;
  			$scope.repoUrl = returnedRepo.Url;
  			$scope.repoFolder = returnedRepo.Folder;
    	}); 

	  	$scope.save = function(){
	  		var json = {Email: $scope.repoEmail, Username: $scope.repoUserName, Password: $scope.repoPassword, Url: $scope.repoUrl, Folder: $scope.repoFolder};
	  		$http.post('/api/insertRepo', json);
	  		//Save somthing
	  		ngDialog.close();
	  	}	

	  $scope.closeThisDialog = function() {
	  	ngDialog.close();

	  }	
  });