var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
      }
  });

  var swiper1 = new Swiper(".mySwiper1", {
    cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
      },
        1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });
