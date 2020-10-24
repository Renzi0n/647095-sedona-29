const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('.search__btn');

searchForm.classList.add('visually-hidden');

searchBtn.addEventListener('click', () => {
  if (searchForm.classList.contains('visually-hidden')) {
    searchForm.classList.remove('visually-hidden');
    searchForm.classList.add('animation');
  } else {
    searchForm.classList.add('visually-hidden');
    searchForm.classList.remove('animation');
  }
});
