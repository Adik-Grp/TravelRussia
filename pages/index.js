const btnRu = document.querySelector('.header__lang-link_ru');
const btnEn = document.querySelector('.header__lang-link_en');
const title = document.querySelector('.lead__title');

btnRu.addEventListener('click', () => {
  title.textContent = 'Путешествия по России';
});

btnEn.addEventListener('click', () => {
  title.textContent = 'Travel to Russia';
});

/* select.addEventListener('change', changeURLLanguage);
function changeURLLanguage () {
  let lang = select.header__link-wrapper;
  location.href = window.location.pathname + '#'+ lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  document.querySelector('title').innerHTML = langArr['unit'][hash];
} */