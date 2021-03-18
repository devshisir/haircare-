$(document).ready(function() {
    var ecoMerch = $(window);
    var page = $('html, body');




    // new product slider active
    $('.new_product_slider_active').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:1,
                stagePadding: 30,
                margin:10,
            },
            576:{
                items:1,
                stagePadding: 80,
            },
            768:{
                stagePadding: 60,
                items: 2,
            },
            992:{
                stagePadding: 60,
            },
            1201:{
                items:4,
            }
        }
    })


    // sidebar toggle
    $('.sidebar_toggle span').on('click',function(){
        $('#sidebarMenu').addClass('show');
    })

    $('.sidebar_close span').on('click',function(){
        $('#sidebarMenu').removeClass('show');
    })


















    
});