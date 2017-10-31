'use strict';
angular.module('utils')
	.factory('utils', [
		'$http', 
		'config',
		'$rootScope',
		'$state',
		function($http, config, $rootScope, $state){
			var utils = {};
			utils.createEroor = function (err, state) {
				$rootScope.errors.push(error);
				$rootScope.hasError = true;
				$state.go(state);
			}

			return utils;
		}]);