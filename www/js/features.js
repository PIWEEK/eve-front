// MENU RESPONSIVE
jQuery(document).ready(function() {

    var hideMenu = function(){
        $(".overlay").remove();
        $('nav.event-mobile').toggle();
    }

    var showMenu = function(){
        var overlay = $('<div class="overlay"/>');
        $("body").append(overlay);
        overlay.on("click", hideMenu);
        $('nav.event-mobile').toggle();
    }

    $('#event-nav-icon').click(showMenu);

    $('.icon-eve').click(hideMenu);
});
