const intFrameWidth = window.innerWidth;
const tabletWidth = 1024;
const formApplyHeader = document.querySelector('#headerFormApply');
const formApplyHeaderEmail = document.querySelector('#headerFormApply').elements['email'];
const formApplyFooter = document.querySelector('#footerFormApply');
const formApplyFooterEmail = document.querySelector('#footerFormApply').elements['email'];
const cards = document.querySelectorAll('.card');
const buttonsSubmit = document.querySelectorAll('.form__submit-button');
const buttonDonate = document.querySelector('.donate__button');

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

// buttonDonate.addEventListener('click', (evt) => {
//   // добавляем слушатель на кнопку поддержки
//   alert(`just clicked the DONATE button!`);
// });

// function setMultipleEventListeners(elements, name) {
//   // функция добавления слушателей для события клика сразу нескольким DOM элементам
//   const elementsArray = Array.from(elements);
//   elementsArray.forEach(element => element.addEventListener('click', (evt) => {
//     alert(`just clicked the ${name.toUpperCase()}!`);
//   }));
// }

// setMultipleEventListeners(cards, 'card');
// добавляем слушателей кликам на карточки

// setMultipleEventListeners(buttonsSubmit, 'submit button');
// добавляем слушателей кнопкам отправки заявки
