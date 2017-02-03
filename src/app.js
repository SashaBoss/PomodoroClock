; (function (angular) {

    var app = angular.module('PomodoroClock', ['ngRoute', 'ngResource']);

    app.config(function ($sceProvider) {
        $sceProvider.enabled(false);
    });

    app.controller('PomodoroClockController', [
        '$scope', '$http', function ($scope, $http) {

        }
    ]);
})(window.angular);