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

// Select the button
const toggle = document.querySelector(".toggle__checkbox");
/*
// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
  // ...let's toggle the .dark-theme class on the body
  document.body.classList.toggle("dark-mode");
// Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
  // ...let's toggle the .light-theme class on the body
  document.body.classList.toggle("light-mode");
}*/

// Listen for a click on the button
toggle.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
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
