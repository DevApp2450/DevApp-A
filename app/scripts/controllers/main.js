'use strict';

angular.module('devAppAeApp')
  .controller('MainCtrl', function ($scope, ngDialog) {
  	//Initial Setup Popup
  	$scope.initialSetup = function(){
  		ngDialog.open({ template: 'views/partials/initialSetup.html'});
  	}

  	//New Project Popup
    $scope.newProject = function(){
    	ngDialog.open({ template: 'views/partials/createNewProject.html'});	
	}

	//Add Exsisting Popup
	$scope.addExisting = function(){
		ngDialog.open({ template: 'views/partials/addExistingProject.html'});
	}

	//Migrare Popup
	$scope.migrate = function(){
		ngDialog.open({ template: 'views/partials/migrate.html'});
	}
  });
