let popup = document.querySelector('.popup');
let pageContainer = document.querySelector('.page__container');
let profile = pageContainer.querySelector('.profile');
let editButton = profile.querySelector('.profile__editButton');

function openPopup() {
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

let closeButton = popup.querySelector('.popup__close');

function closePopup() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__submitButton');
let nameInput = popup.querySelector('popup__text_type_name');
let jobInput = popup.querySelector('popup__text_type_profession');

function formSubmitHandler (evt) {
  evt.preventDefault();
}