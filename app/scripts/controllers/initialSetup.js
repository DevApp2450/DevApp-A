'use strict';

angular.module('devAppAeApp')
  .controller('initialSetupCtrl', function ($scope, ngDialog) {   

	  	$scope.save = function(){
	  		//Save somthing
	  		ngDialog.close();
	  	}	

	  $scope.closeThisDialog = function() {
	  	ngDialog.close();

	  }	
  });