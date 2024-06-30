$('.banner .owl-carousel ').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    navText: ["<span  ><i class='fa fa-angle-left'></i></span>", "<span  ><i class='fa fa-angle-right'></i></span>"],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
    
})

$('.testimonial_carousal').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:false,
     autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.testimony').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:false,
     autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.doctors_panel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:false,
     autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


jQuery(document).ready(function($) {
    $(document).on('click', '.text .toggle', function(event) {
        event.preventDefault();
        $(this).prev('.text-box').toggleClass('height');
        var text = $(this).text().trim() == "Read More"?'Hide':'Read More';
        $(this).text(text);
    });
    $(document).on('click', '.card .toggle_concern', function(event) {
        event.preventDefault();
        $(this).prev('p').toggleClass('active');
        var text = $(this).text().trim() == "Read More"?'Hide':'Read More';
        $(this).text(text);
    });

    
 
});
 