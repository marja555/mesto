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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

for (let i = 0; i < initialCards.length; i++) {
  const cardTemplate = document.querySelector('#cardTemplate').content;
  const cardsOnline = document.querySelector('.cards');
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = initialCards[i].name;
  cardElement.querySelector('.card__image').src = initialCards[i].link;
  cardsOnline.append(cardElement);
}

const cardDelButtons = document.querySelectorAll('.card__del-button');
for (let i = 0; i < cardDelButtons.length; i++) {
  cardDelButtons[i].addEventListener('click', function (event) {
    const eventTarget = event.target;
    const cardItem = eventTarget.closest('.card');
    cardItem.remove();
  });
}

const likeButtons = document.querySelectorAll('.card__like');
for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', function (event) {
    const eventTarget = event.target;
    eventTarget.classList.toggle('card__like_active');
  });
}