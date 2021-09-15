const formApplyHeader = document.querySelector('#headerFormApply');
const formApplyHeaderEmail = document.querySelector('#headerFormApply').elements['email'];
const formApplyFooter = document.querySelector('#footerFormApply');
const formApplyFooterEmail = document.querySelector('#footerFormApply').elements['email'];
const cards = document.querySelectorAll('.card');
const buttonsSubmit = document.querySelectorAll('.form__submit-button');
const buttonsSubmitMobile = document.querySelectorAll('.form__submit-button-mobile');
const buttonDonate = document.querySelector('.donate__button');

formApplyHeader.addEventListener('submit', (evt) => {
  // добавляем слушатель на отправку формы в header
  evt.preventDefault();
  // отменяет стандартную отправку формы, которая перезагружает страницу,
  // теперь можем определить свою логику отправки
  if (formApplyHeaderEmail.value) {
    alert(`the apply form in HEADER has been submitted: ${formApplyHeaderEmail.value}!`);
    const submitButton = evt.submitter.classList;
    console.log(submitButton)
    if (submitButton.contains('form__submit-button'))
      evt.submitter.textContent = `Круто, спасибо за доверие!`;
    else {
      if (submitButton.contains('form__submit-button-mobile'))
      // если находимся в моб. версии сайта, меняем эмоджи кнопки
        evt.submitter.textContent = String.fromCodePoint(128155);
    }
  }
});

formApplyFooter.addEventListener('submit', (evt) => {
  // добавляем слушатель на отправку формы в footer
  evt.preventDefault();
  if (formApplyFooterEmail.value) {
    alert(`the apply form in FOOTER has been submitted: ${formApplyFooterEmail.value}!`);
    const submitButton = evt.submitter.classList;
    console.log(submitButton)
    if (submitButton.contains('form__submit-button'))
      evt.submitter.textContent = `Круто, спасибо за доверие!`;
    else {
      if (submitButton.contains('form__submit-button-mobile'))
        evt.submitter.textContent = String.fromCodePoint(128155);
    }
  }
});

buttonDonate.addEventListener('click', (evt) => {
  // добавляем слушатель на кнопку поддержки
  alert(`just clicked the DONATE button!`);
});

function setMultipleEventListeners(elements, name) {
  // функция добавления слушателей для события клика сразу нескольким DOM элементам
  const elementsArray = Array.from(elements);
  elementsArray.forEach(element => element.addEventListener('click', (evt) => {
    alert(`just clicked the ${name.toUpperCase()}!`);
  }));
}

setMultipleEventListeners(cards, 'card');
// добавляем слушателей кликам на карточки

setMultipleEventListeners(buttonsSubmit, 'submit button');
// добавляем слушателей кнопкам отправки заявки

setMultipleEventListeners(buttonsSubmitMobile, 'mobile submit button');
// добавляем слушателей кнопкам отправки заявки в мобильной версии сайта
