$('nav.desktop a').hover(function(){
    $('nav li').removeClass('selected');
    $(this).parent().addClass('selected');
})

$('nav.mobile h3').click(function(){
    $('ul.nav-desktop').slideToggle();
})