nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};
    factory.reviews = [{
        title: "The Martian",
        review: "It takes a genuine master craftsman to take something as complex and difficult as this and make it look easy, but it also takes an artist with a great ear to take something as dense with exposition as this is and make it practically sing.",
        id: 1
    },
    {
        title: "Straight Outta Compton",
        review: "Straight Outta Compton is a hugely entertaining film that works best if you don’t look at it too closely and just listen.",
        id: 2
    },
    {
        title: "Black Mass",
        review: "If Johnny Depp’s mesmerizing performance — a bracing return to form for the star after a series of critical and commercial misfires — is the chief selling point of Black Mass, there is much else to recommend this sober, sprawling, deeply engrossing evocation of Bulger’s South Boston fiefdom and his complex relationship with the FBI agent John Connolly, played with equally impressive skill by Joel Edgerton.",
        id: 3
    },
    {
        title: "Mission: Impossible - Rogue Nation",
        review: "McQuarrie understands that these films are essentially tall tales with a sense of humor, skating on the edge of parody at all times while maintaining a poker face.",
        id: 4
    },
    {
        title: "Southpaw",
        review: "Southpaw is all about the fist. There’s no delicate footwork here, no lingering grace notes. It’s a film played entirely in power chords.",
        id: 5
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
