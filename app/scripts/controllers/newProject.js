'use strict';

angular.module('devAppAApp')
  .controller('newProjectCtrl', function ($scope, ngDialog) {   	
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