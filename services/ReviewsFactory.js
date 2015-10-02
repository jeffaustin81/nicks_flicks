nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};
    factory.reviews = [{
        title: "",
        review: "",
        id: factory.reviews.length + 1
    },
    {
        title: "",
        review: "",
        id: factory.reviews.length + 1
    },
    {
        title: "",
        review: "",
        id: factory.reviews.length + 1
    },
    {
        title: "",
        review: "",
        id: factory.reviews.length + 1
    },
    {
        title: "",
        review: "",
        id: factory.reviews.length + 1
    }];
    factory.addReview = function() {
        factory.reviews.push({
            title: factory.reviewTitle,
            review: factory.review,
            id: factory.reviews.length + 1
        });
        factory.reviewTitle = null;
    };

    return factory;
});
