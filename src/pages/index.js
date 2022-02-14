import './index.css';
import { formSelectors, profileAvatar } from '../utils/constants.js';
import {
  editButton,
  formProfileElement,
  formPlaceElement,
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
import PopupWithFormSubmit from '../components/PopupWithFormSubmit';

const api = new Api({
  adress: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: '046e1e7e-a85b-4246-8cd0-fe8501647960'
});

// let myId = '';

// function getUserId() {
//   api.getUser()
//   .then((userData) => {
//     myId = userData._id
//     return myId;
//   })
//   .catch(err => console.log(err))
// }

 //console.log(myId)

const popupSubmit = new PopupWithFormSubmit('.popup_type_submit');
popupSubmit.setEventListeners();

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar-edit',
  handleFormSubmit: (avatar) => {
    api.editAvatar(avatar)
      .then((res) => {
        userInfo.setAvatar(res.avatar);
        console.log(res.avatar)
      })
      .then(() => popupEditAvatar.close())
      .catch(err => console.log(`Не удалось изменить аватар, ошибка: ${err}`))
  }
})
popupEditAvatar.setEventListeners();

function handleRender(data) { //функция для отрисовки любых карточек
  const cardsList = new Section({
    items: data,
    renderer: (item) => {
      const card = createCard(item);
      cardsList.addItem(card);
      
    },
  },
  cardsContainer
  );
  return cardsList;
}

api.getCards()
  .then((cards) => {
    handleRender(cards).renderItems();
  })
  .catch(err => console.log(err));

 // getUserId()

const bigImage = new PopupWithImage('.popup_type_pic');
bigImage.setEventListeners();

const popupPlace = new PopupWithForm({
  popupSelector: '.popup_type_place',
  handleFormSubmit: ({place, image}) => {
    api.addCard({place, image})
    .then((data) => {
      const newCard = createCard(data);
      handleRender(data).prependItem(newCard);
    })
    .then(() =>popupPlace.close())
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
  .then((userData) => {
    userInfo.getUserInfo(userData);
    userInfo.setUserId(userData._id);
  })
  .catch(err => console.log(err))

const popupProfile = new PopupWithForm({ 
  popupSelector: '.popup_type_profile',
  handleFormSubmit: ({name, job}) => {
    api.editUserInfo({name, job})
      .then((data) => {
        userInfo.setUserInfo(data);
        
      })
      .then(() => popupProfile.close())
      .catch(err => `Не удалось отредактировать профиль, ошибка ${err}`)
  }
});
popupProfile.setEventListeners();

function openPopupProfile () {
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
      api.deleteCard(card.getId())
        .then(()  => {
          card.deleteCard();
        })
        .catch(err => console.log(`Не удалось удалить карточку, ошибка: ${err}`))
     })
  },
  handleLike: () => {
    console.log('Hey')
    api.updateLikeCard(cardData)
        .then((likesData) => {
          console.log(likesData)
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

const addFormValidation = 
      new FormValidator(formSelectors, formPlaceElement);
addFormValidation.enableValidation();

const profileFormValidation = 
      new FormValidator(formSelectors, formProfileElement);
profileFormValidation.enableValidation();



//const profileAvatar = document.querySelector('.profile__image');
//console.log(avatar)

profileAvatar.addEventListener('click', openPopupEditAvatar);