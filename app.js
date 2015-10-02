var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider) {

    $stateProvider.state('home', {
        url: "",
        views: {
            'header': {
                templateUrl: "partials/header.html",
                controller: 'HeadersCtrl'
            },
            'body': {
                templateUrl: "partials/home.html",
            },
        }
    });

    $stateProvider.state('reviews', {
        url: "/reviews",
        views: {
            'header': {
                templateUrl: "partials/header.html",
                controller: 'HeadersCtrl'
            },
            'body': {
                templateUrl: "partials/reviews.html",
                controller: 'ReviewsCtrl'
            },
        }
    });

    $stateProvider.state('reviews.review', {
        url: "/:reviewId",
        views: {
            'header': {
                templateUrl: "partials/header.html",
                controller: 'HeadersCtrl'
            },
            'body': {
                templateUrl: "partials/review.html",
                controller: 'ReviewCtrl'
            },
        }
    });

});
