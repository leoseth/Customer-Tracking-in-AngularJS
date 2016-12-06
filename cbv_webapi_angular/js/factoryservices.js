console.log("factory 1");
var shareddata = angular.module('myapp', []);

shareddata.factory('mysharedservice', function ($rootScope) {
    var sharedService = {};
    console.log("factory 2");
    sharedService.make = '';

    sharedService.prepForBroadcast = function (msg) {
        this.message = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function () {
        $rootScope.$broadcast('handleBroadcast');
    };
    
})

function customercontroller($scope, sharedService) {
    console.log('4');
    $scope.$on('handleBroadcast', function () {
        $scope.make = 'ONE: ' + sharedService.message;
    });
}

function carcontroller($scope, sharedService) {
    $scope.$on('handleBroadcast', function () {
        $scope.make = 'TWO: ' + sharedService.message;
    });
}

customercontroller.$inject = ['$scope', 'mySharedService'];
carcontroller.$inject = ['$scope', 'mySharedService'];