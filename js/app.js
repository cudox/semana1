(function () {
'use strict';
var style = {};
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', ["$scope",function ($scope) {
		$scope.lunchList = "";
		$scope.message = "";
		$scope.style = {};
		console.log('estilos: ' + style);
		$scope.getMessage = function () {
			$scope.message = obtenerMensaje($scope.lunchList);
			console.log('estilos 2: ' + style);
			$scope.style = style;
		};
	}]);

  function obtenerMensaje(message) {
  	if(message == undefined || message === ""){
  		style.border  = "solid 2px red";
  		style.color = 'red';
  		return "Please enter data first";
  	}
  	console.log(message);
  	var mensaje = message.split(',');
  	console.log(mensaje);
  	console.log(mensaje.length);
	style.border  = "solid 2px green";
	style.color = 'green';
  	if(mensaje.length <= 3)
  		return "Enjoy!";
  	else
  		return "Too much!";
  }

})();

//!function(){"use strict";function e(e){if(void 0==e||""===e)return"Please enter data first";console.log(e);var n=e.split(",");return console.log(n),console.log(n.length),n.length<=3?"Enjoy!":"Too much!"}angular.module("LunchCheck",[]).controller("LunchCheckController",["$scope",function(n){n.lunchList="",n.message="",n.getMessage=function(){n.message=e(n.lunchList)}}])}();