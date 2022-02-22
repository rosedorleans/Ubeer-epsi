
$("#cart_link").on( "click", function() {
    $("html").css("overflow", 'hidden');
    $('#cart_modal').css('display', 'block')
});

$("#close_modal").on( "click", function() {
    $("html").css("overflow", 'scroll');
    $('#cart_modal').css('display', 'none')
}); 

