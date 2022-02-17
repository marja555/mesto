import './index.css';
import { formSelectors, jobInput, nameInput, profileAvatar } from '../utils/constants.js';
import {
  editButton,
  formProfileElement,
  formPlaceElement,
  formEditAvatarElement,
  profileName,
  profileProfession,
  addButton,
  cardsContainer,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

const api = new Api({
  adress: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: '046e1e7e-a85b-4246-8cd0-fe8501647960'
});

const userInfo = new UserInfo({
  nameEl: profileName,
  jobEl: profileProfession,
  avatarEl: profileAvatar
});

const cardsList = new Section(
  (item) => {
    const card = createCard(item);
    cardsList.addItem(card);
  },
cardsContainer
);

Promise.all([api.getUser(), api.getCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cardsList.renderItems(cards);
  })
  .catch(err => console.log(err))

const popupConfirmation = new PopupWithConfirmation('.popup_type_submit');
popupConfirmation.setEventListeners();

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar-edit',
  handleFormSubmit: (avatar) => {
    popupEditAvatar.renderLoading('Сохранение...');
    api.editAvatar(avatar)
      .then((userData) => {
        userInfo.setUserInfo(userData);
      })
      .then(() => popupEditAvatar.close())
      .catch(err => console.log(`Не удалось изменить аватар, ошибка: ${err}`))
      .finally(() => popupEditAvatar.renderLoading('Сохранить'))
  }
})

popupEditAvatar.setEventListeners();

const popupPlace = new PopupWithForm({
  popupSelector: '.popup_type_place',
  handleFormSubmit: ({place, image}) => {
    popupPlace.renderLoading('Сохранение...');

    api.addCard({place, image})
    .then((data) => {
      const newCard = createCard(data);
      cardsList.prependItem(newCard);
      popupPlace.close();
    })
    .catch(err => console.log(`Ошибка при создании карточки ${err}`))
    .finally(() => popupPlace.renderLoading('Сохранить'))
  }   
});

popupPlace.setEventListeners();

const popupProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: ({name, job}) => {
    popupProfile.renderLoading('Сохранение...');

    api.editUserInfo({name, job})
      .then((data) => {
        userInfo.setUserInfo(data);
        popupProfile.close()
      })
      .catch(err => `Не удалось отредактировать профиль, ошибка ${err}`)
      .finally(() => popupProfile.renderLoading('Сохранить'))
  }
});

popupProfile.setEventListeners();

const bigImage = new PopupWithImage('.popup_type_pic');
bigImage.setEventListeners();

function openPopupProfile () {
  
  const currentUserInfo = userInfo.getUserInfo();
  
  nameInput.value = currentUserInfo.name;
  jobInput.value = currentUserInfo.about;
  popupProfile.open();
  
  profileFormValidation.removeInputError();
  profileFormValidation.setInactiveButton();
}

function openPopupPlace () {
  popupPlace.open()
  
  addFormValidation.removeInputError();
  addFormValidation.setInactiveButton();
}

function openPopupEditAvatar() {
  popupEditAvatar.open()

  editAvatarFormValidation.removeInputError();
  editAvatarFormValidation.setInactiveButton();
}

function createCard(cardData) {
  const card = new Card({ cardData: cardData,
  handleCardClick: () => {
    bigImage.open(cardData.name, cardData.link);
  },
  handleDeleteBtnClick: () => {
    popupConfirmation.open();
    popupConfirmation.setSubmitAction( () => {
      api.deleteCard(card.getId())
        .then(()  => {
          card.deleteCard();
        })
        .then(() => popupConfirmation.close())
        .catch(err => console.log(`Не удалось удалить карточку, ошибка: ${err}`))
     })
  },
  handleLike: (cardData) => {
    api.updateLikeCard(cardData)
        .then((likesData) => {
          card.updateLike(likesData)
        })
        .catch(err => console.log(`Не удалось поставить лайк, ошибка ${err}`))
  },
  userId: userInfo._id
},
  '#cardTemplate');
  const cardElement = card.generate();
  return cardElement;
}

addButton.addEventListener('click', openPopupPlace);

editButton.addEventListener('click', openPopupProfile);

profileAvatar.addEventListener('click', openPopupEditAvatar);

const addFormValidation = 
      new FormValidator(formSelectors, formPlaceElement);
addFormValidation.enableValidation();

const profileFormValidation = 
      new FormValidator(formSelectors, formProfileElement);
profileFormValidation.enableValidation();

const editAvatarFormValidation = 
      new FormValidator(formSelectors, formEditAvatarElement);
editAvatarFormValidation.enableValidation();