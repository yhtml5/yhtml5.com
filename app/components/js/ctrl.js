/*
 * @require router.js
 * @require directive.js
 * @require filter.js
 */
/************************* Ctrl *****************************/
angular.module('controllers', [])
    .controller('controllers', function ($scope) {

    })
    .controller('devoloping', function ($scope, $timeout) {
        var browserKeywordsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobi|Windows CE|Symbian|Windows Phone|POLARIS|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/i;
        if (browserKeywordsMobile.test(navigator.userAgent)) {
            $scope.devolopingDisplay = true
        } else {
            S.init();
            $timeout(function () {
                $scope.devolopingDisplay = true
            }, 9000);
        }
    });