'use strict';

angular.module('devAppAApp')
  .controller('MainCtrl', function ($scope, ngDialog) {
  	//Initial Setup Popup
  	$scope.initialSetup = function(){
  		ngDialog.open({ template: 'views/initialSetup.html'});
  	}

  	//New Project Popup
    $scope.newProject = function(){
    	ngDialog.open({ template: 'views/createNewProject.html'});	
	}

	//Add Exsisting Popup
	$scope.addExisting = function(){
		ngDialog.open({ template: 'views/addExistingProject.html'});
	}

	//Migrare Popup
	$scope.migrate = function(){
		ngDialog.open({ template: 'views/migrate.html'});
	}


  });
