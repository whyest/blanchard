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
