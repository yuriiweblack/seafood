$(function(){
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-up.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-down.png"></button>',
        fade: true,
        responsive: [
            {
            breakpoint: 371,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,

            }
        }
    ]
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScrol: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/up.png"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/down.png"></button>',
        responsive: [
        {
            breakpoint: 891,
            settings: {
                vertical: false,
                slidesToShow: 3,
                arrows: false,
                dots: true,
            },
            breakpoint: 461,
            settings: {
                vertical: false,
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }

        }
        ]
    
    });

    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScrol: 1,
        fade: true,
        asNavFor: '.product__name',
        arrows: false,
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--activ');
    });

});