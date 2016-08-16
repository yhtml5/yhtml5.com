/*
 * @require router.js
 * @require directive.js
 * @require filter.js
 */
/************************* Ctrl *****************************/
angular.module('controllers', [])
    .controller('controllers', function($scope) {

    })
    .controller('devoloping', function($scope,$timeout) {
        S.init();
        $timeout(function () {
            $scope.devoloping=true
        }, 9000);
    })