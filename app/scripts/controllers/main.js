'use strict';

angular.module('devAppAApp')
  .controller('MainCtrl', function ($scope, ngDialog) {
    $scope.newProject = function(){
    	ngDialog.open({ template: 'views/createNewProject.html'});	
		    }
  });
