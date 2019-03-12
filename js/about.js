$(document).ready(function(){
    $(".button").click(function(){
        $(this).attr("disabled", "disabled");
        $(".about-title").fadeOut(300, function(){
            fadeInAndOut($(".b"), 4000, function(){
                fadeInAndOut($(".c"), 4000, function(){
                    fadeInAndOut($(".d"), 4000, function(){
                        fadeInAndOut($(".e"), 5000, function(){
                            fadeInAndOut($(".f"), 5000, function(){
                                fadeInAndOut($(".g"), 5000, function(){
                                    fadeInAndOut($(".h"), 4000, function(){
                                        $(".button").removeAttr("disabled");
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

function fadeInAndOut(element, secondDelay, callback){
    element.delay(500).fadeIn(300).delay(secondDelay).fadeOut(300, callback);
}