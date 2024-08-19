//toggle for mobile
document.getElementById('mobileNavToggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});

//contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbw9WUDCoPeoUcCUHX9rGOXmuDRxAkf13B2TnM8IntNZUppMnrejTLIOWLakyb9hq3A/exec'  
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },1000)
        form.reset
    })
    .catch(error => console.error('Error!', error.message))
})

// swiper 
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    effect: 'slide',
 });
// <!-- Swiper Initialization Script -->
document.addEventListener('DOMContentLoaded', function () {
    var swiperDesktop = new Swiper('.carousel-2', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // 3 seconds delay
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });

    // Initialize Swiper for mobile view
    var swiperMobile = new Swiper('#services-mobile .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '#services-mobile .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // 3 seconds delay
            disableOnInteraction: false,
        },
    });
});