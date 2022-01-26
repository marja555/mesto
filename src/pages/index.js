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

const bigImageClass = new PopupWithImage('.popup_type_pic');
const popupPlaceClass = new PopupWithForm({
  popupSelector: '.popup_type_place',
  handleFormSubmit: (formData) => {
  createCard(formData);
  }
});
const aboutUserClass = new UserInfo({
  nameSelector: profileName,
  infoSelector: profileProfession,
});
const popupProfileClass = new PopupWithForm({ 
  popupSelector: '.popup_type_profile',
  handleFormSubmit: ({name, job}) => {
    aboutUserClass.setUserInfo({name, job});;
  }
});

function openPopupProfile () {
  popupProfileClass.open();
  const aboutUser = aboutUserClass.getUserInfo();
    nameInput.value = aboutUser.nameOfUser;
    jobInput.value = aboutUser.jobOfUser;
  
  profileFormValidation.removeInputError();
  profileFormValidation.setInactiveButton();
}

function openPopupPlace () {
  popupPlaceClass.open()
  
  addFormValidation.removeInputError();
  addFormValidation.setInactiveButton();
}

function createCard(obj) {
  const card = new Card({ cardData: obj,
  handleCardClick: () => {
    bigImageClass.open(obj.name, obj.link);
  },
},
  '#cardTemplate')
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

  popupPlaceClass.close();
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