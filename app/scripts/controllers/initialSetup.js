'use strict';

angular.module('devAppAeApp')
  .controller('initialSetupCtrl', function ($scope, ngDialog, $http) {   

	  	$scope.save = function(){
	  		$http.get('/api/loadvm');
	  		//Save somthing
	  		ngDialog.close();
	  	}	

	  $scope.closeThisDialog = function() {
	  	ngDialog.close();

	  }	
  });