$(function(){
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-up.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-down.png"></button>',
        vertical: true
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScrol: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/up.png"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/down.png"></button>',
    });

    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScrol: 1,
        fade: true,
        asNavFor: '.product__name',
        arrows: false,
    });

});