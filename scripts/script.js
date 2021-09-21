const intFrameWidth = window.innerWidth;
const tabletWidth = 768;
const formApplyHeader = document.querySelector('#headerFormApply');
const formApplyHeaderEmail = document.querySelector('#headerFormApply').elements['email'];
const formApplyFooter = document.querySelector('#footerFormApply');
const formApplyFooterEmail = document.querySelector('#footerFormApply').elements['email'];
const cards = document.querySelectorAll('.card');
const buttonsSubmit = document.querySelectorAll('.form__submit-button');
const buttonDonate = document.querySelector('.donate__button');
const toggle = document.querySelector('.toggle');
const page = document.querySelector('.page');
const cardTitles = document.querySelectorAll('.card__title');
const headerTitle = document.querySelector('.header__title');
const headerSubtitle = document.querySelector('.header__subtitle');
const companyName = document.querySelector('.company__name');
const sectionTitles = document.querySelectorAll('.section-title');
const galleryUpperPic = document.querySelector('.gallery__upper-row .gallery__item:nth-child(1) .gallery__image');
const galleryLowerPic = document.querySelector('.gallery__lower-row .gallery__item:nth-child(2) .gallery__image');

formApplyHeader.addEventListener('submit', (evt) => {
  // добавляем слушатель на отправку формы в header
  evt.preventDefault();
  // отменяет стандартную отправку формы, которая перезагружает страницу,
  // теперь можем определить свою логику отправки
  if (formApplyHeaderEmail.value) {
    if (intFrameWidth >= tabletWidth)
      evt.submitter.textContent = `Круто, спасибо за доверие!`;
    else {
      evt.submitter.textContent = String.fromCodePoint(128155);
    }
  }
});

formApplyFooter.addEventListener('submit', (evt) => {
  // добавляем слушатель на отправку формы в footer
  evt.preventDefault();
  if (formApplyFooterEmail.value) {
    if (intFrameWidth >= tabletWidth)
      evt.submitter.textContent = `Круто, спасибо за доверие!`;
    else {
      evt.submitter.textContent = String.fromCodePoint(128155);
    }
  }
});

toggle.addEventListener('change', (evt) => {
  // Добавляем слушатель на чек-бокс смены цветовой темы
  page.classList.toggle('page_theme_light');
  cards.forEach(el => el.classList.toggle('card_theme_light'));
  cardTitles.forEach(el => el.classList.toggle('card__title_theme_light'));
  headerTitle.classList.toggle('header__title_theme_light');
  headerSubtitle.classList.toggle('header__subtitle_theme_light');
  sectionTitles.forEach(el => el.classList.toggle('section-title_theme_light'));
  console.log(companyName)
  companyName.classList.toggle('company__name_theme_light');
  if (evt.target.checked) {
    galleryUpperPic.setAttribute('src', './images/gallery-img-m2-light-theme.png');
    galleryLowerPic.setAttribute('src', './images/gallery-img-camera-light-theme.png');
  }
  else {
    galleryUpperPic.setAttribute('src', './images/gallery-img-m2.png');
    galleryLowerPic.setAttribute('src', './images/gallery-img-camera.png');
  }
});
