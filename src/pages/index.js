import './index.css';
import { formSelectors, profileAvatar } from '../utils/constants.js';
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
import PopupWithFormSubmit from '../components/PopupWithFormSubmit';

const api = new Api({
  adress: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: '046e1e7e-a85b-4246-8cd0-fe8501647960'
});

const popupSubmit = new PopupWithFormSubmit('.popup_type_submit');
popupSubmit.setEventListeners();

function handleRender(data) { //функция для отрисовки любых карточек
  const cardsList = new Section({
    items: data,
    renderer: (item) => {
      const card = createCard(item);
      cardsList.addItem(card)
    },
  },
  cardsContainer
  );
  return cardsList;
}

api.getCards()
  .then((cards) => {
    const cardsCreated = new Section({
      items: cards,
      renderer: (cardData) => {
        return cardData.likes.length;
        cardData.handleRemoveDeleteIcon();
      }
    });
    cardsCreated.renderItems();
    handleRender(cards).renderItems();
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
      handleRender(data).prependItem(newCard);
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

api.getUser()
  .then((data) => {
    userInfo.getUserInfo(data);
  })
  .catch(err => console.log(err))

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
  },
  handleDeleteBtnClick: () => {
    popupSubmit.open();
    popupSubmit.setSubmitAction( () => {
      api.deleteCard(cardData._id)
        .then(()  => {
          card.deleteCard();
        })
     })
  },
},
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