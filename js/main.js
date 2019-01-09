$(function() {
    var header = $(".main");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1) {
            header.addClass("header-alt");
        } else {
            header.removeClass("header-alt");
        }
    });
});