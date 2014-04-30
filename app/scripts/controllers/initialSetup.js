'use strict';

angular.module('devAppApp')
  .controller('initialSetupCtrl', function ($scope, ngDialog) {   	
    	
		  $scope.saveAndCloseDialog = function() {
		  	ngDialog.close();

		  }

		  $scope.closeThisDialog = function() {
		  	ngDialog.close();

		  }	
  });