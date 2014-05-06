'use strict';

angular.module('devAppAeApp')
  .controller('pullRepoCtrl', function ($scope, ngDialog) { 
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

		  $scope.options = [
		    {name:'Master'},
		    {name:'Experimental'},
		    {name:'Production'}
		    /*{name:'white'},
		    {name:'red'},
		    {name:'blue'},
		    {name:'yellow'}*/
		  ];
		  $scope.option = $scope.options[0]; //Wordpress

		  $scope.tagOptions = [
		    {name:'4.0.199'},
		    {name:'4.0.198'},
		    {name:'4.0.197'}
		    /*{name:'white'},
		    {name:'red'},
		    {name:'blue'},
		    {name:'yellow'}*/
		  ];
		  $scope.tagOption = $scope.tagOptions[0]; //Repo 1

		  $scope.closeThisDialog = function() {
		  	ngDialog.close();
		  }	
  });
