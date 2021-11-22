

// accordion
let toggle = document.querySelectorAll(".accordion__control");
let content = document.querySelectorAll(".accordion__content");
let icons = document.querySelectorAll(".accordion__icon");

for (let i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener("click", function () {
    icons[i].classList.toggle("rotate");
    content[i].classList.toggle("open");
  });
};

// tabs painters
const tabsPainter = document.querySelectorAll('.accordion__painter-list');
const painterLink = document.querySelectorAll('.accordion__painter-link');
const painter = document.querySelectorAll('.painter');
if (tabsPainter) {
  const tabsHandler = (tabLinks) => {
    tabLinks.forEach(el => {
      const path = el.dataset.tabsPath;
      el.addEventListener('click', (e) => {
        e.preventDefault();
        painterLink.forEach(el => {
          el.classList.remove('accordion__painter-link--active')
        });
        e.target.classList.add('accordion__painter-link--active');
        painter.forEach(el => {
          el.classList.remove('painter-content-active')
        });
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('painter-content-active');
      });
    });
  }
  tabsPainter.forEach(el => {
    const tabsLinks = el.querySelectorAll('.accordion__painter-link');
    tabsHandler(tabsLinks);
  });
}

// tabs counter
const tabs = document.querySelector('.tabs');
const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__content');
if (tabs) {
  tabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tabs__btn')) {
      const tabsPath = e.target.dataset.tabsPath;
      tabsHandler(tabsPath);
    }
  })

  const tabsHandler = (path) => {
    tabsBtn.forEach(el => {
      el.classList.remove('tabs__btn-active')
    })
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn-active')

    tabsContent.forEach(el => {
      el.classList.remove('tabs__content-active')
    })
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content-active')
  }
}

// choices
const defaultSelect = () => {
  const element = document.querySelector('.default');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    placeholderValue: null,
  });
};
defaultSelect();

// header dropdown 
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".nav-category__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown-menu");
    document.querySelectorAll(".nav-category__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("dropdown-btn-active");
      }
    });
    document.querySelectorAll(".dropdown-menu").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("dropdown-active");
      }
    })
    dropdown.classList.toggle("dropdown-active");
    btn.classList.toggle("dropdown-btn-active")
  })
})
document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".nav-category__list")) {
    document.querySelectorAll(".dropdown-menu").forEach(el => {
        el.classList.remove("dropdown-active");
    })
     document.querySelectorAll(".nav-category__btn").forEach(el => {
        el.classList.remove("dropdown-btn-active");
    });
  }
})
});

// simplebar
document.querySelectorAll('.simbplebar').forEach(el =>{
  new SimpleBar(el, {
    scrollbarMaxSize: 25,
  });
});

// hero swiper
const heroswiper = new Swiper('.hero-swiper', {
  // Default parameters
  slidesPerView: 1,
  loop: true,
    effect: 'fade',
    fadeEffect: {
    crossFade: true
    },
    touchRatio: 0,
    spaceBetween: 0,
    autoplay: {
      delay: 2000,
    },
    speed: 3000,
});


// gallery swiper
const galleryswiper = new Swiper('.gallery-swiper', {
  // slidesPerView: 3 ,
  // slidesPerGroup: 3,
  clickable: true,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: '.right-gallery__next',
    prevEl: '.right-gallery__prev',
  },
  pagination: {
    el: '.right-gallery__swiper-pagination',
    type: 'fraction',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  speed: 500,
  simulateTouch: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 10,
    },
    539: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34,
    },

    1190: {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30,
    },

    1330: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerColumn: 2,
      grid: {
        rows: 2,
      },
      slidesPerGroup: 3,
    }
  }
});

// smooth scroll
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300,
	speedAsDuration: true
});

// burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-top__right');
const body = document.body;
const menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('stop-scroll');
});

menuLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('stop-scroll');
  });
});

// search
document.querySelector(".search-margin").addEventListener("click", function() {
  document.querySelector(".search-form").classList.add("search-form__active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".search-form");
  if (!target.closest(".header-top__container")) {
  form.classList.remove("search-form__active");
    form.querySelector("input").value = "";
    document.querySelector(".search-margin").classList.remove("active")
  }
})

document.querySelector(".search-form__btn_close").addEventListener("click", function() {
  document.querySelector(".search-form").classList.remove("search-form__active");
  document.querySelector(".search-margin").classList.remove("active")
})


