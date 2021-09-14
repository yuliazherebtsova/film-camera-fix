const mobileMenu = document.querySelector(".header__mobile");
const menuBtn = document.querySelector(".header__burger");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("header__mobile_active");
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
