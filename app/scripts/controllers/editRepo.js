'use strict';

var repos = [];

angular.module('devAppAeApp')
  .controller('editRepoCtrl', function ($scope, ngDialog, $http) {   	
  	//get repos 
  	$http.get('/api/getRepos').success(function(returnedRepo) {
      console.log(returnedRepo);
      repos = returnedRepo;
    });

  	//load up dropbox
    $scope.options = [];
    console.log('reposLength: ' + repos.length);
    for(var i = 0; i < repos.length; i++) {
    	var optText = {name: repos[i].repoUsername + ': ' + repos[i].repoUrl, id: repos[i].repoId};
    	console.log(optText);
    	$scope.options.push(optText);
    }
		  //   {name: repos[]},
		  //   {name:'Another Repo'},
		  //   {name:'Guess what? Yet another Repo!'}
		  // ];
	$scope.option = $scope.options[0]; //Github

  	//prepop fields w/ option selected in dropbox
    //$http.get('/api/getRepos').success(function(returnedRepo) {

   		// console.log(returnedRepo);
   		// $scope.repoEmail = returnedRepo.repoEmail;
   		// $scope.repoUserName = returnedRepo.repoUsername;
   		// $scope.repoPassword = returnedRepo.repoPassword;
   		// $scope.repoUrl = returnedRepo.repoUrl;
   		// $scope.repoFolder = returnedRepo.repoFolder;
    //}); 

	$scope.selectOption = function() {
   		console.log($scope.option);
   		var idx = $scope.option.id;
   		console.log(idx);
   		var editRepo = repos[idx];
   		$scope.repoEmail = editRepo.repoEmail;
   		$scope.repoUserName = editRepo.repoUsername;
   		$scope.repoPassword = editRepo.repoPassword;
   		$scope.repoUrl = editRepo.repoUrl;
   		$scope.repoFolder = editRepo.repoFolder;
	}

    //update db
    $scope.update = function() {
    	//TODO
		//var json = {repoId: nextId, repoEmail: $scope.repoEmail, repoUsername: $scope.repoUserName, repoPassword: $scope.repoPassword, repoUrl: $scope.repoUrl, repoFolder: $scope.repoFolder};
		//$http.post('/api/updateRepo', json);
		ngDialog.close();
    }

	$scope.closeThisDialog = function() {
		ngDialog.close();
	}	
});