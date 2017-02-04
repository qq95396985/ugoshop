(function($){
    var settime;
    $(".scrollNews").hover(function () {
        clearInterval(settime);
    }, function () {
        settime = setInterval(function () {
            var $first = $(".scrollNews ul:first");
            var height = $first.find("li:first").height();
            $first.animate({ "marginTop": -height + "px" }, 600, function () {
                $first.css({ marginTop: 0 }).find("li:first").appendTo($first);
            });
        }, 3000);
    }).trigger("mouseleave");
})(jQuery);