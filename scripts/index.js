let popup = document.querySelector('.popup');
let pageContainer = document.querySelector('.page__container');
let profile = pageContainer.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__text_type_name');
let jobInput = formElement.querySelector('.form__text_type_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);