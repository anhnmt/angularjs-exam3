var app = angular.module('app', ['ngRoute']);
var user_login = sessionStorage.getItem('user_login') ? angular.fromJson(sessionStorage.getItem('user_login')) : [];
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "./page/home.html"
        })
        .when('/about', {
            templateUrl: "./page/about.html"
        })
        .when('/cart', {
            templateUrl: "./page/cart.html"
        })
        .when('/product', {
            templateUrl: "./page/product.html"
        });
});

app.controller('mainCtrl', function($scope, $location, $http) {
    var data_url = "./data/product.json";

    $http.get(data_url).then(function(res) {
        $scope.products = res.data;
    });

    $scope.show_sp = function(sp) {
        $scope.showSp = sp;
        $("#modal-show").modal();
    }

})