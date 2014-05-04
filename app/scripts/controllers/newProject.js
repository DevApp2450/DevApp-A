'use strict';

angular.module('devAppAeApp')
  .controller('newProjectCtrl', function ($scope, ngDialog) { 
    	$scope.options = [
		    {name:'WordPress'},
		    {name:'GoDaddy'},
		    {name:'Something Random'}
		    /*{name:'white'},
		    {name:'red'},
		    {name:'blue'},
		    {name:'yellow'}*/
		  ];
		  $scope.option = $scope.options[0]; //Wordpress

		  $scope.repoOptions = [
		    {name:'Repo 1'},
		    {name:'Repo 2'},
		    {name:'Repo 3'}
		    /*{name:'white'},
		    {name:'red'},
		    {name:'blue'},
		    {name:'yellow'}*/
		  ];
		  $scope.repoOption = $scope.repoOptions[0]; //Repo 1

		  $scope.closeThisDialog = function() {
		  	ngDialog.close();
		  }	
  });
