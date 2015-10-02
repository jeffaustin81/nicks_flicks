nicksFlicks.controller('ReviewCtrl', function ReviewCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
    $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
});
