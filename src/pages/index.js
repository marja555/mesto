import './index.css';
import { initialCards, formSelectors, profileAvatar } from '../utils/constants.js';
import {
  editButton,
  formProfileElement,
  formPlaceElement,
  nameInput,
  jobInput,
  profileName,
  profileProfession,
  addButton,
  cardsContainer
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  adress: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: '046e1e7e-a85b-4246-8cd0-fe8501647960'
});

api.getCards()
  .then((cards) => {
    console.log(cards)
    const cardsList = new Section ({
      items: cards,
      renderer: (item) => {
        const card = createCard(item);
        cardsList.addItem(card);
      },
    },
    cardsContainer
    );
    cardsList.renderItems();
  })
  .catch(err => console.log(err));


const bigImage = new PopupWithImage('.popup_type_pic');
bigImage.setEventListeners();

// const cardsList = new Section ({
//   items: initialCards,
//   renderer: (item) => {
//     const card = createCard(item);
//     cardsList.addItem(card);
//   },
// },
// cardsContainer
// );

// cardsList.renderItems();

const popupPlace = new PopupWithForm({
  popupSelector: '.popup_type_place',
  // handleFormSubmit: ({place, image}) => {
  // const newCard = createCard({name: place, link: image});
  // cardsList.prependItem(newCard);
  // popupPlace.close();
  // }
  handleFormSubmit: ({place, image}) => {
    api.addCard({place, image})
    .then((data) => {
      const newCard = createCard({name: data.name, link: data.link});
    cardsList.prependItem(newCard);
    popupPlace.close();
    })
    .catch(err => console.log(`Ошибка при создании карточки ${err}`))
  }   
});
popupPlace.setEventListeners();

const userInfo = new UserInfo({
  nameEl: profileName,
  jobEl: profileProfession,
  avatarEl: profileAvatar
});

const popupProfile = new PopupWithForm({ 
  popupSelector: '.popup_type_profile',
  handleFormSubmit: ({name, job}) => {
    api.editUserInfo({name, job})
      .then((data) => {
        userInfo.setUserInfo(data);
        popupProfile.close();
      })
      .catch(err => `Не удалось отредактировать профиль, ошибка ${err}`)
  }
});
popupProfile.setEventListeners();

function openPopupProfile () {
  popupProfile.open();
  // const aboutUser = userInfo.getUserInfo();
  //   nameInput.value = aboutUser.name;
  //   jobInput.value = aboutUser.job;

  api.getUser()
  .then((data) => {
    userInfo.getUserInfo(data);
  })
  .catch(err => console.log(err))
  
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

addButton.addEventListener('click', openPopupPlace);

editButton.addEventListener('click', openPopupProfile);

const addFormValidation = 
      new FormValidator(formSelectors, formPlaceElement);
addFormValidation.enableValidation();

const profileFormValidation = 
      new FormValidator(formSelectors, formProfileElement);
profileFormValidation.enableValidation();