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

let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__text_type_name');
let jobInput = formElement.querySelector('.form__text_type_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
nameInput.value = profileName.textContent;
jobInput.value = profileProfession.textContent;


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup();
}

function formSubmitDone () {
  alert('Готово!');
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('click', formSubmitDone);