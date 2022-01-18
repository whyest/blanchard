document.addEventListener("DOMContentLoaded", function () {
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
  document.querySelector(".search-margin").addEventListener("click", function () {
    document.querySelector(".search-form").classList.add("search-form__active");
    this.classList.add("active");
  });

  document.addEventListener("click", function (e) {
    let target = e.target;
    let form = document.querySelector(".search-form");
    if (!target.closest(".header-top__container")) {
      form.classList.remove("search-form__active");
      form.querySelector("input").value = "";
      document.querySelector(".search-margin").classList.remove("active")
    }
  });

  document.querySelector(".search-form__btn_close").addEventListener("click", function () {
    document.querySelector(".search-form").classList.remove("search-form__active");
    document.querySelector(".search-margin").classList.remove("active")
  });

  // header dropdown 
  document.querySelectorAll(".nav-category__btn").forEach(item => {
    item.addEventListener("click", function () {
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
  document.addEventListener("click", function (e) {
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

  // simplebar
  document.querySelectorAll('.simbplebar').forEach(el => {
    new SimpleBar(el, {
      scrollbarMaxSize: 25,
    });
  });

  // smooth scroll
  // All animations will take exactly 500ms
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,
    speedAsDuration: true
  });

  // accordion
  $( function() {
    $( ".accordion-list" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
    });
  } );

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
            el.classList.remove('accordion__painter-link_active')
          });
          e.target.classList.add('accordion__painter-link_active');
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
  };

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
  };

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

  // events
  // const eventsItem = document.querySelectorAll('.event__item')
  // const allEventsBtn = document.querySelector('.event__btn')
  // const eventHiddenTablet = document.querySelector('.event__hidden_tablet')


  // allEventsBtn.addEventListener('click', () => {
  //   eventsItem.forEach(el => {
  //     el.classList.remove('event__hidden')
  //   })
  //   allEventsBtn.classList.add('event__hidden')
  // })

  //   if (window.innerWidth <= 970) {
  //     eventHiddenTablet.classList.add('event__hidden')
  //   } else {
  //     eventHiddenTablet.classList.remove('event__hidden')
  //   }

  //   if (window.innerWidth <= 667) {
  //     eventsItem.forEach(el => {
  //       el.classList.remove('event__hidden')
  //     })
  //   }

  // categories
  (() => {
    const checkBtn = document.querySelector('.js-check-heading');
    
    // checkBtn.addEventListener('click', (e) => {
    //   e.currentTarget.classList.toggle('is-active');
    checkBtn.addEventListener('click', function () {
        this.classList.toggle('is-active');
    });
})();

// tooltip
tippy('.tooltip-marker1', {
  content: 'Пример современных тенденций современная методология разработки',
  theme: 'purple',
  trigger: 'click',
  animation: 'perspective',
  maxWidth: 264,
});
tippy('.tooltip-marker2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'purple',
  trigger: 'click',
  animation: 'perspective',
  maxWidth: 264,
});
tippy('.tooltip-marker3', {
  content: 'В стремлении повысить качество',
  theme: 'purple',
  trigger: 'click',
  animation: 'perspective',
  maxWidth: 242,
});

// inputMask
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

// just validate
new JustValidate('.js-form', {
  rules: {
      name: {
        required: true
      },
      tel: {
          required: true,
          tel: true
      },
      email: {
        required: true,
        email: true
      },
  },
  colorWrong: '#ff5c00',
  messages: {
    name: 'Как вас зовут?',
    tel: 'Укажите ваш телефон',
    email: 'Укажите ваш email',
  },
  submitHandler: function (form, values, ajax) {

      ajax({
        url: 'https://just-validate-api.herokuapp.com/submit',
        method: 'POST',
        data: values,
        async: true,
        callback: function(response)  {
          console.log(response)
        }
      });
    },
  });


// (() => {
//   const tooltipBtn = document.querySelector('.tooltip');
  
//   tooltipBtn.addEventListener('click', function () {
//       this.classList.add('is-active');
//   });
// })();

// Yandex Map
   

})
