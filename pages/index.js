const title = document.querySelector('.title');

const btnRu = document.querySelector('.header__lang-link_ru');
const btnEn = document.querySelector('.header__lang-link_en');
const leadTitle = document.querySelector('.lead__title');
const leadSubtitle = document.querySelector('.lead__subtitle');

btnRu.addEventListener('click', () => {
  title.textContent = 'Путешествия по России';
  leadTitle.textContent = 'Путешествия по России';
  leadSubtitle.textContent = 'Настоящая страна не в выпусках новостей, а здесь.';
});

btnEn.addEventListener('click', () => {
  title.textContent = 'Travel to Russia';
  leadTitle.textContent = 'Travel to Russia';
  leadSubtitle.textContent = 'The real country is not in the news releases, but here.';
});