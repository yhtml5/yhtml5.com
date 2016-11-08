;/*!server/author.js*/
/*=====================================================================
 * Author:Kyle && qichao
 * Website:http://yhtml5.com
 * Gihub:https://github.com/yhtml5
 * Description: We work hard to contribute our work back
 *              to the web, mobile, server, & new technology.
 *====================================================================*/
 'use strict';
;/*!components/js/router.js*/
/* * @require shape-shifter.js */ /************************* Router *****************************/ angular.module('yhtml5', [ 'ui.router', 'controllers', 'directive' ]) .config(function ($stateProvider, $urlRouterProvider) { var domainUrl = ""; $urlRouterProvider /**.when('/dashboard/*', '/dashboard')**/ .otherwise("/"); $stateProvider .state('index', { url: "/", views: { "content": { templateUrl: domainUrl + "view/developing/index.html" } } }) .state('design', { url: "/design", views: { "content": { templateUrl: domainUrl + "view/design/index.html" } } }) })
;/*!components/js/directive.js*/
/* * @require components/js/router.js */ /************************* Require *****************************/ angular.module('directive', []) .directive("repeat", [function() { return { restrict: 'A', require: "ngModel", link: function(scope, element, attrs, ctrl) { if (ctrl) { var otherInput = element.inheritedData("$formController")[attrs.repeat]; var repeatValidator = function(value) { var validity = value === otherInput.$viewValue; ctrl.$setValidity("repeat", validity); return validity ? value : undefined; }; ctrl.$parsers.push(repeatValidator); ctrl.$formatters.push(repeatValidator); otherInput.$parsers.push(function(value) { ctrl.$setValidity("repeat", value === ctrl.$viewValue); return value; }); } } }; }]);
;/*!components/js/filter.js*/
/* * @require components/js/router.js */ /************************* Filter *****************************/
;/*!components/js/ctrl.js*/
/* * @require components/js/router.js * @require components/js/directive.js * @require components/js/filter.js */ /************************* Ctrl *****************************/ angular.module('controllers', []) .controller('controllers', function ($scope) { }) .controller('devoloping', function ($scope, $timeout) { var browserKeywordsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobi|Windows CE|Symbian|Windows Phone|POLARIS|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/i; if (browserKeywordsMobile.test(navigator.userAgent)) { $scope.devolopingDisplay = true } else { $scope.devolopingBackground = true; $scope.devolopingDisplay = true } });
;/*!server/console.js*/
console.log("%c YHTML5 %c Copyright \xa9 2010-%s", 'font-family: "microsoft yahei", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;", (new Date).getFullYear())
console.log("%c " + "We work hard to contribute our work back to the web, mobile, big data, & new Front-End technology.", "color:#333;font-size:16px;margin:4px;");