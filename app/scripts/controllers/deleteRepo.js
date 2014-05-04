'use strict';

angular.module('devAppAeApp')
  .controller('migrateCtrl', function ($scope, ngDialog) {   	
  	 $scope.repo = {url: 'http://'};	 
    	$scope.options = [
		    {name:'Repo1'},
		    {name:'Another Repo'},
		    {name:'Guess what? Yet another Repo!'}
		  ];
		  $scope.option = $scope.options[0]; //Github

		  $scope.closeThisDialog = function() {
		  	ngDialog.close();

		  }	
  });