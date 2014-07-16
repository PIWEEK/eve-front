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
});
