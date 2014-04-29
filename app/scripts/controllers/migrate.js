'use strict';

angular.module('devAppAApp')
  .controller('migrateCtrl', function ($scope, ngDialog) {   	
  	 $scope.repo = {url: 'http://'};	 
    	$scope.options = [
		    {name:'Github'},
		    {name:'Bitbucket'}
		  ];
		  $scope.option = $scope.options[0]; //Github

		  $scope.closeThisDialog = function() {
		  	ngDialog.close();

		  }	
  });