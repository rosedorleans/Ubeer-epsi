
// Counter items for Card

var nb_beers_in_cart = 0

$('.nb_item').text(0)
$(".less_item").on( "click", function() {
    var beerCard = findBeerCard($(this))
    var id = findId(beerCard)
    changeCountLess(id)
    if($('.nb_item').text() == 0){
        beerCard.removeClass('beer_in_cart')
    }
});

$(".more_item").on( "click", function() {
    var beerCard = findBeerCard($(this))
    var id = findId(beerCard)
    changeCountMore(id)
});

$(".more_item").on("click", function(event) {
    var beerCard = findBeerCard($(this))
    beerCard.addClass('beer_in_cart')
});


// Open modal Card

$("#cart_link").on( "click", function() {
    $("html").css("overflow", 'hidden');
    $('#cart_modal').css('display', 'block')
    $('.content').css('margin', '75px 10px 0 0')
    if($('.beer-card').hasClass('beer_in_cart')){
        $('#cart_content').append('<ul id="cart_list"></ul>')
        $.each($('.beer_in_cart'), function(index, value){
            var beerName = $(this).find('.beer_name').text()
            var brewery = $(this).find('.brewery').text()
            var nb_beer = $(this).find('.nb_item').text()
            var beer_img_src = $(this).find('.beer_img').attr('src')
            $('#cart_list').append(
                '<li>'+
                    '<img src="'+beer_img_src+'" alt="biere" class="beer_img_modal">'+
                    '<p class="beer_name">'+beerName+' X'+nb_beer+'</p>'+
                    '<p class="brewery">'+brewery+'</p>'+
                    '<span class="nb_beer">'+nb_beer+'</span>'+
                '</li>'
            )
        })
    } else {
        $('#cart_content')
        .append('<p id="empty_cart_message">Aucune bière dans le panier !</p>')
    }
});

// Close modal Card

$("#close_modal").on( "click", function() {
    $("html").css("overflow", 'scroll');
    $('#cart_modal').css('display', 'none')
    $('.content').css('margin', '75px 0')
    $('#cart_content').empty()
}); 




// functions

function findBeerCard(span){
    var beerCard = span.parent().parent().parent()
    return beerCard
}

function findId(beerCard){
    var id = beerCard.attr('id').split('_')
    id = id[1]
    return id
}

function changeCountLess(id){
    var nb_item_for_cart = $('#beer_'+id).find('.nb_item')
    var value = parseInt(nb_item_for_cart.text(), 10) - 1;
    nb_item_for_cart.text(value)
    if(value < 0){
        nb_item_for_cart.text(0)
    }
}

function changeCountMore(id){
    var nb_item_for_cart = $('#beer_'+id).find('.nb_item')
    var value = parseInt(nb_item_for_cart.text(), 10) + 1;
    nb_item_for_cart.text(value)
}