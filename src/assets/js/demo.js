new WOW().init();

function swiperInit() {
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        speed: 2000,
        autoplay: true,
        autoplay: {
            delay: 3000,
        },
        coverflowEffect: {
            rotate: 35,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            560: {
                slidesPerView: 3,
            },
            990: {
                slidesPerView: 5,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

