import './index.css';
import { initialCards, formSelectors } from '../utils/constants.js';
import {
  editButton,
  formProfileElement,
  formPlaceElement,
  nameInput,
  jobInput,
  profileName,
  profileProfession,
  addButton,
  placeInput,
  photoInput,
  cardsContainer
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const bigImage = new PopupWithImage('.popup_type_pic');
bigImage.setEventListeners();

const popupPlace = new PopupWithForm({
  popupSelector: '.popup_type_place',
  handleFormSubmit: (formData) => {
  createCard(formData);
  popupPlace.close();
  }
});
popupPlace.setEventListeners();

const userInfo = new UserInfo({
  nameEl: profileName,
  jobEl: profileProfession,
});
const popupProfile = new PopupWithForm({ 
  popupSelector: '.popup_type_profile',
  handleFormSubmit: ({name, job}) => {
    userInfo.setUserInfo({name, job});
    popupProfile.close();
  }
});
popupProfile.setEventListeners();

function openPopupProfile () {
  popupProfile.open();
  const aboutUser = userInfo.getUserInfo();
    nameInput.value = aboutUser.name;
    jobInput.value = aboutUser.job;
  
  profileFormValidation.removeInputError();
  profileFormValidation.setInactiveButton();
}

function openPopupPlace () {
  popupPlace.open()
  
  addFormValidation.removeInputError();
  addFormValidation.setInactiveButton();
}

function createCard(cardData) {
  const card = new Card({ cardData: cardData,
  handleCardClick: () => {
    bigImage.open(cardData.name, cardData.link);
  }},
  '#cardTemplate');
  const cardElement = card.generate();
  return cardElement;
}

const cardsList = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    cardsList.addItem(card);
  },
},
cardsContainer
);

cardsList.renderItems();

function formPlaceSubmitHandler () {
  const inputs = {
    name: placeInput.value,
    link: photoInput.value,
  };
  
  const newCard = createCard(inputs);
  cardsContainer.prepend(newCard);

  popupPlace.close();
}

addButton.addEventListener('click', openPopupPlace);

editButton.addEventListener('click', openPopupProfile);

formPlaceElement.addEventListener('submit', formPlaceSubmitHandler);

const addFormValidation = 
      new FormValidator(formSelectors, formPlaceElement);
addFormValidation.enableValidation();

const profileFormValidation = 
      new FormValidator(formSelectors, formProfileElement);
profileFormValidation.enableValidation();