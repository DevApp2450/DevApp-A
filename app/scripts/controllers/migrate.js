'use strict';

angular.module('devAppAApp')
  .controller('migrateCtrl', function ($scope, ngDialog) {   	
  	 $scope.repo = {url: 'http://'};	 
    	$scope.options = [
		    {name:'Github'},
		    /*{name:'white'},
		    {name:'red'},
		    {name:'blue'},
		    {name:'yellow'}*/
		  ];
		  $scope.option = $scope.options[0]; //Github

		  $scope.closeThisDialog = function() {
		  	ngDialog.close();

		  }	
  });