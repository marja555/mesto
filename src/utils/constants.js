export const formSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
}

export const editButton = document.querySelector('.profile__edit-button');
export const formProfileElement = document.querySelector('.popup__form_type_profile');
export const formPlaceElement = document.querySelector('.popup__form_type_place');
export const formEditAvatarElement = document.querySelector('.popup__form_type_edit');
export const nameInput = formProfileElement.querySelector('.popup__input_type_name');
export const jobInput = formProfileElement.querySelector('.popup__input_type_profession');
export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__profession');
export const profileAvatar = document.querySelector('.profile__image');
export const addButton = document.querySelector('.profile__add-button');
export const cardsContainer = document.querySelector('.cards');
export const profileImage = document.querySelector('.profile__image');