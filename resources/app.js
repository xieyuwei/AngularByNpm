import angular from 'angular'

import AppModule from './modules/app/app.module'

angular.module('myApp', [AppModule])

// app.run(['$rootScope', function($rootScope) {
//   $rootScope.hello = '111'
// }])

// app.controller('HomeCtrl', ['$rootScope', function($scope) {
//   console.log('HomeCtrl')
// }])
//
// .config(['$routeProvider', function ($routeProvider) {
//   $routeProvider.when('/template', {
//     templateUrl: 'template/template.html',
//     controller: 'View1Ctrl'
//   });
// }])
//
// app.controller('View1Ctrl', ['$scope', function ($scope) {
//   console.log('view1Ctrl')
//   $scope.coupons = [
//     {name: "Coupon 1"},
//     {name: "Coupon 2"}
//   ]
// }])

// app.component.js('coupon', {
//   templateUrl: './components/coupon.html',
//   bindings: {
//     coupon: '<'
//   },
//   controller: function ($scope) {
//     $scope.coupon = this.coupon
//   }
// })