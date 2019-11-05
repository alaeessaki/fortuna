$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
  });
  