'use strict';

angular.module('devAppAeApp')
  .controller('initialSetupCtrl', function ($scope, ngDialog, $http) {   

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