'use strict';

angular.module('devAppAeApp')
  .controller('migrateCtrl', function ($scope, ngDialog) {   	
  	 $scope.repo = {url: 'http://'};	 
    	$scope.options = [
		    {name:'WordPress'},
		    {name:'GoDaddy'},
		    {name:'Something Random'}
		  ];
		  $scope.option = $scope.options[0]; //Github

		  $scope.closeThisDialog = function() {
		  	ngDialog.close();

		  }	
  });