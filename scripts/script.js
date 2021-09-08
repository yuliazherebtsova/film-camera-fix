/*
TODO Чек-лист [V]
* Общие замечания:
// Заполните readme.md более полно с описанием проекта.
// Также нужно выложить проект на gh-pages и дать на него ссылку в readme
* Есть ошибки валидации
* В консоли ест ошибки из-за ненайденных файлов http://joxi.ru/xAeZQZacMpgpVr
* Не подключились изображения в рецензиях http://joxi.ru/E2p7O78tv9aBnm
* У меню в футере нет стилей по наведению и стилей для активного пункта меню.
* Так как это кнопки, то при нажатии должно что-то происходить: http://joxi.ru/BA0qXqDs1JPwnr
* Есть горизонтальная прокрутка на ширине 320-430рх, 770-890рх, 900-1135рх
* На ширине 320рх внешний вид блока links не соответствует макету http://joxi.ru/Vm6j8jWt3DjXMm
* На ширине 320рх внешний вид шапки не соответствует макету
*(кнопка "Проекты" должна переместиться в хэдер, текст и кнопка "Билеты" должны быть выровнены правее)
* http://joxi.ru/V2V0P0ViBxKN3r
* На ширине 320рх фон блока descriptio-block по макету другой. Также в этом блоке неправильные отступы.
* На ширине 320рх фотографии в блоке с фотографиями располагаются по две в ряд.
* При указании шрифта указывайте резервный шрифт и тип засечек.

* Можно лучше:
* ссылкам в футере хорошо было бы задать стили по наведению.
*/

const mobileMenu = document.querySelector(".header__mobile");
const menuBtn = document.querySelector(".header__burger");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("header__mobile_active");
});

const swiperReviews = new Swiper('.reviews__container', {
  // Инициализируем Swiper для блока Reviews
  wrapperClass: 'reviews__wrapper',
  slideClass: 'reviews__slide',
  slideActiveClass: 'reviews__slide_type_active',

  spaceBetween: 50,
  // Отступ между слайдами

  slidesPerView: 1,
  // Кол-во отображаемых слайдов

  slidesPerGroup: 1,
  // Кол-во пролистываемых слайдов

  // Листать стрелками бесконечно
  loop: true,

  autoHeight: true,

  // autoplay: {
  // Автопрокрутка
  //   // Пауза между прокруткой
  //   delay: 3000,
  //   disableOnIteraction: true
  // },

  speed: 1000,
  // Скорость переключения

  centeredSlides: true,
  // Активный слайд по центру

  initialSlide: 0,
  // Индекс активного слайда

  navigation: {
    // Стрелки
    nextEl: '.reviews__next-button',
    prevEl: '.reviews__prev-button'
  },

  pagination: {
    // Навигация
    // Буллеты, текущее положение
    el: '.reviews__pagination',
    bulletClass: 'reviews__bullet',
    bulletActiveClass: 'reviews__bullet_type_active',
    // Буллеты
    clickable: true,
    dynamicBullets: false,
  },

  slideToClickedSlide: true,
  // Переход по слайдам путем клика на следующий


  simulateTouch: true,
  // Включение / отключение перетаскивания на десктопе
  // (также включается возможность переключиться на другой слайд по клику на него)

  touchRatio: 1,
  // Чувствительность свайпа

  touchAngle: 45,
  // Угол срабатывания свайпа

  breakpoints: {
    // Брейкпойнты для адаптива
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1440: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    }
  },
});

// Инициализируем Swiper для блока Feedback
const swiperFeedback = new Swiper('.feedback__container', {
  // Инициализируем Swiper для блока Feedback
  wrapperClass: 'feedback__wrapper',
  slideClass: 'feedback__slide',
  spaceBetween: 30,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  speed: 1000,
  initialSlide: 0,
  slideToClickedSlide: true,
  keyboard: true,
  navigation: {
    nextEl: '.feedback__next-button',
    prevEl: '.feedback__prev-button'
  },
  pagination: {
    el: '.feedback__pagination',
    bulletClass: 'feedback__bullet',
    bulletActiveClass: 'feedback__bullet_type_active',
    clickable: true,
  },
  watchOverflow: true,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },
});

function createCardReviews(cardData) {
  // функция создания нового слайда в блоке Feedback
  const cardTemplate = document.querySelector('#slideReviews-template').content;
  const cardElement = cardTemplate.querySelector('.reviews__slide').cloneNode(true);
  // создаем слайд в блоке Reviews по шаблону
  cardElement.querySelector('.card__image').src = cardData.image;
  cardElement.querySelector('.card__text').textContent = cardData.text;

  cardElement.querySelector('.card__readmore').addEventListener('click', (evt) => {
    // создаем слушатель на событие нажатия на кнопку "Читать полностью" в карточке
    console.log('just clicked on the "Read more" link!');
  });
  return cardElement;
}

function createCardFeedback(cardData) {
  // функция создания нового слайда в блоке Feedback
  const cardTemplate = document.querySelector('#slideFeedback-template').content;
  const cardElement = cardTemplate.querySelector('.feedback__slide').cloneNode(true);
  // создаем слайд в блоке Feedback по шаблону
  cardElement.querySelector('.card__text').textContent = cardData.text;
  cardElement.querySelector('.card__author').textContent = cardData.author;

  return cardElement;
}

function renderCard(slider, card) {
  // функция добавления слайда в слайдер
  slider.appendSlide(card);
}

function loadInitialCardsReviews(cards) {
  // функция загрузки начальных слайдов из заготовленного массива
  cards.forEach(element => {
    const newCard = createCardReviews(element);
    renderCard(swiperReviews, newCard);
  });
};

function loadInitialCardsFeedback(cards) {
  // функция загрузки начальных слайдов из заготовленного массива
  cards.forEach(element => {
    const newCard = createCardFeedback(element);
    renderCard(swiperFeedback, newCard);
  });
};

loadInitialCardsFeedback(initialCardsFeedback);
loadInitialCardsReviews(initialCardsReviews);
swiperFeedback.slideNext(0);
// Начинать с первого слайда после загрузки из массива
swiperReviews.slideTo(2);
// Начинать с первого слайда после загрузки из массива
