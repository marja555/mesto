import { initialCards, formSelectors } from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const pageContainer = document.querySelector('.page__container');
const profile = pageContainer.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const formProfileElement = document.querySelector('.popup__form_type_profile');
const formPlaceElement = document.querySelector('.popup__form_type_place');
const nameInput = formProfileElement.querySelector('.popup__input_type_name');
const jobInput = formProfileElement.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
//const popupProfile = document.querySelector('.popup_type_profile');
//const popupPlace = document.querySelector('.popup_type_place');
const popupPic = document.querySelector('.popup_type_pic');
//const closePopupProfileBtn = popupProfile.querySelector('.popup__close');
//const closePopupPlaceBtn = popupPlace.querySelector('.popup__close');
const closePopupPicBtn = popupPic.querySelector('.popup__close');
const addButton = profile.querySelector('.profile__add-button');
const placeInput = document.querySelector('.popup__input_type_place');
const photoInput = document.querySelector('.popup__input_type_photo-link');
const cardsContainer = document.querySelector('.cards');
//const popupProfileOverlay = popupProfile.querySelector('.popup__overlay');
//const popupPlaceOverlay = popupPlace.querySelector('.popup__overlay');
const popupPicOverlay = popupPic.querySelector('.popup__overlay');


function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const onPopup = document.querySelector('.popup_type_opened');
      closePopup (onPopup);
    }
}

//function openPopup(popup) {
 // popup.classList.add('popup_type_opened');
 // document.addEventListener('keydown', closeByEscape);
//}

function openPopupProfile () {
  //openPopup(popupProfile);
  //profileFormValidation.removeInputError();
  
  //nameInput.value = profileName.textContent;
  //jobInput.value = profileProfession.textContent;

  //profileFormValidation.setInactiveButton();

  const popupProfile = new PopupWithForm({ 
    popupSelector: '.popup_type_profile',
    handleFormSubmit: () => {
      const aboutUser = new UserInfo({
        userName: profileName.textContent,
        userInfo: profileProfession.textContent
      });
      aboutUser.getUserInfo();
    }
  });
  popupProfile.open();

  profileFormValidation.removeInputError();
  profileFormValidation.setInactiveButton();
}

function openPopupPlace () {
  const popupPlace = new PopupWithForm({
    popupSelector: '.popup_type_place',
    handleFormSubmit: (formData) =>
    createCard(formData)
  });
  popupPlace.open()
  
  addFormValidation.removeInputError();
  //formPlaceElement.reset();
  addFormValidation.setInactiveButton();
}



/*function closePopup(popup) {
  popup.classList.remove('popup_type_opened');
  document.removeEventListener('keydown', closeByEscape);
}*/

function formProfileSubmitHandler () {
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProfile);
}

function createCard(obj) {
  const card = new Card({ cardData: obj,
  handleCardClick: () => {
    const bigImage = new PopupWithImage('.popup_type_pic');
    bigImage.open(obj.name, obj.link);
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



/*function formPlaceSubmitHandler () {
  const inputs = {
    name: placeInput.value,
    link: photoInput.value,
  };
  
  const newCard = createCard(inputs);
  cardsContainer.prepend(newCard);

  //closePopup(popupPlace);
}*/



addButton.addEventListener('click', openPopupPlace);

editButton.addEventListener('click', openPopupProfile);

/*closePopupProfileBtn.addEventListener('click', () => {
  closePopup(popupProfile);
});

closePopupPlaceBtn.addEventListener('click', () => {
  closePopup(popupPlace);
});

closePopupPicBtn.addEventListener('click', () => {
  closePopup(popupPic);
});

popupProfileOverlay.addEventListener('click', () => {
  closePopup(popupProfile);
});

popupPlaceOverlay.addEventListener('click', () => {
    closePopup(popupPlace);
});

popupPicOverlay.addEventListener('click', () => {
  closePopup(popupPic);
});*/

formProfileElement.addEventListener('submit', formProfileSubmitHandler);

//formPlaceElement.addEventListener('submit', formPlaceSubmitHandler);

const addFormValidation = 
      new FormValidator(formSelectors, formPlaceElement);
addFormValidation.enableValidation();

const profileFormValidation = 
      new FormValidator(formSelectors, formProfileElement);
profileFormValidation.enableValidation();