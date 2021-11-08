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

const dropdownButtons = document.querySelectorAll('.nav-category__btn');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

dropdownButtons.forEach(el => {
  el.addEventListener('click', (e) => {
    const curr = e.currentTarget;
    const dropMenu = curr.closest('.dropdown').querySelector('.dropdown-menu');
    dropdownButtons.forEach(el => {
      el.classList.remove(('dropdown-btn-active'))
    });
    dropdownMenus.forEach(el => {
      el.classList.remove('dropdown-active')
    })

    if (dropMenu) {
      dropMenu.classList.toggle('dropdown-active');
      curr.classList.add('dropdown-btn-active');
    }
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('nav-category__btn')) {
    dropdownButtons.forEach(el => {
      el.classList.remove(('dropdown-btn-active'))
    });
    dropdownMenus.forEach(el => {
      el.classList.remove(('dropdown-active'))
    })
  }
});

// swiper
const swiper = new Swiper('.swiper', {
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerColumnFill: 'row',
  slidesPerGroup: 3,
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
    667: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
    },

    1024: {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },

    1330: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 4,
    }
  }
});

// simplebar
new SimpleBar(document.getElementById('myElement'));

