'use strict';

angular.module('devAppAeApp')
  .controller('MainCtrl', function ($scope, ngDialog, $http) {
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

	//Edit Popup
	$scope.editRepo = function(){
		ngDialog.open({ template: 'views/partials/editRepo.html'});
	}

    //Remove Popup
	$scope.deleteRepo = function(){
		ngDialog.open({ template: 'views/partials/deleteRepo.html'});
	}

	//Pull Popup
	$scope.pullRepo = function(){
		ngDialog.open({ template: 'views/partials/pullRepo.html'});
	}

	//Push Popup
	$scope.pushRepo = function(){
		ngDialog.open({ template: 'views/partials/pushRepo.html'});
	}

	//Commit Popup
	$scope.commit = function(){
		ngDialog.open({ template: 'views/partials/commit.html'});
	}

	$scope.openBrower = function(){
		$http.get('/api/browerOpen').success(function() {
	    });
	}

  });
