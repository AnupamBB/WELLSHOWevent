$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});


// typing Animation script

// var typed = new Typed('.typing',{
//     strings: [
//         "CSE Student",
//         "Web Developer",
//         "Programmer"
//     ],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });

// var typed = new Typed('.typing-2',{
//     strings: ["CSE Student","Web Developer","Programmer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });
// var typed = new Typed('.typing-3',{
//     strings: ["Thank You For Invading My Space"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
    
// });



const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});