// MENU RESPONSIVE
jQuery(document).ready(function() {

    $('#event-nav-icon').click(function() {
        $('nav.event-mobile').slideToggle("fast");
        $('body').toggleClass('translate-3d-menu');
    });
    $('.icon-eve').click(function() {
        $('nav.event-mobile').slideToggle("fast");
        $('body').removeClass('translate-3d-menu');
    });
    $('#talks-nav-icon').click(function() {
        $('nav.talks-mobile').slideToggle("fast");
        $('body').toggleClass('translate-3d-menu-left');
    });
});

// SCROLL MENU
jQuery(document).ready(function() {

    var nav = $('.event-header');
    var navh1 = $('.event-header h1')

    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            nav.addClass("f-event-header");
            navh1.hide();
        } else {
            nav.removeClass("f-event-header");
            navh1.show();
        }
    });

});

// MODAL POP-UP
$(document).ready(function(){

    $('.modalLink').modal({
        trigger: '.modalLink',          // id or class of link or button to trigger modal
        olay:'div.overlay',             // id or class of overlay
        modals:'div.modal',             // id or class of modal
        animationEffect: 'slideDown',   // overlay effect | slideDown or fadeIn | default=fadeIn
        animationSpeed: 400,            // speed of overlay in milliseconds | default=400
        moveModalSpeed: 'slow',         // speed of modal movement when window is resized | slow or fast | default=false
        background: '164450',           // hexidecimal color code - DONT USE #
        opacity: 0.7,                   // opacity of modal |  0 - 1 | default = 0.8
        openOnLoad: false,              // open modal on page load | true or false | default=false
        docClose: true,                 // click document to close | true or false | default=true
        closeByEscape: true,            // close modal by escape key | true or false | default=true
        moveOnScroll: true,             // move modal when window is scrolled | true or false | default=false
        resizeWindow: true,             // move modal when window is resized | true or false | default=false
        // video: 'http://player.vimeo.com/video/2355334?color=eb5a3d',    // enter the url of the video
        // videoClass:'video',             // class of video element(s)
        close:'.closeBtn'               // id or class of close button
    });
});
