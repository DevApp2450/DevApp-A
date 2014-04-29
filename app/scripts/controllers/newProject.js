'use strict';

angular.module('devAppAApp')
  .controller('newProjectCtrl', function ($scope, ngDialog) {  
  $scope.repo = {url: 'http://'};	 	
    	$scope.options = [
		    {name:'WordPress'},
		    {name:'GoDaddy'},
		    {name:'Something Random'},
		    /*{name:'white'},
		    {name:'red'},
		    {name:'blue'},
		    {name:'yellow'}*/
		  ];
		  $scope.option = $scope.options[0]; //Wordpress

		  $scope.closeThisDialog = function() {
		  	ngDialog.close();

		  }	
  });