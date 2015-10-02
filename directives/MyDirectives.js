nicksFlicks.directive("changeClass", function() {
    return function (scope, element, attrs) {
        element.bind("click", function() {
            element.parent().toggleClass(attrs.changeClass);
        });
    };
});
