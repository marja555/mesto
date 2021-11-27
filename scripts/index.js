const popup = document.querySelector('.popup');
const pageContainer = document.querySelector('.page__container');
const profile = pageContainer.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__text_type_name');
const jobInput = formElement.querySelector('.form__text_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const closePopupProfileBtn = popupProfile.querySelector('.popup__close');
const closePopupPlaceBtn = popupPlace.querySelector('.popup__close');
const addButton = profile.querySelector('.profile__add-button');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
]; 

function openPopupProfile (type) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  type.classList.add('popup_opened');
}

function openPopupPlace (type) {
  type.classList.add('popup_opened');
}

function closePopup(type) {
  type.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup();
}


addButton.addEventListener('click', () => {
  openPopupPlace(popupPlace);
});

editButton.addEventListener('click', () => {
  openPopupProfile(popupProfile);
});

closePopupProfileBtn.addEventListener('click', () => {
  closePopup(popupProfile);
});

closePopupPlaceBtn.addEventListener('click', () => {
  closePopup(popupPlace);
});

formElement.addEventListener('submit', formSubmitHandler);


const placeInput = document.querySelector('.form__text_type_place');
const photoInput = document.querySelector('.form__text_type_photo');
const cardTemplate = document.querySelector('#cardTemplate').content;
const cardsOnline = document.querySelector('.cards');


function getCard(el) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = el.name;
  cardElement.querySelector('.card__image').src = el.link;
  cardElement.querySelector('.card__image').alt = el.alt;

  const delButton = cardElement.querySelector('.card__del-button');
  delButton.addEventListener('click', handleDelete);

  const likeButton = cardElement.querySelector('.card__like');
  likeButton.addEventListener('click', handleLike);
  
  return cardElement;
}

function render() {
  const htmlCard = initialCards.map((el) => {
    return getCard(el);
  });
  cardsOnline.append(...htmlCard);
}

render();

function handleCreate () {
  const newPlaceName = getCard({name: placeInput.value});
  const newPhoto = getCard({link: photoInput.value});
  const newAlt = getCard({alt: placeInput.value});
  cardsOnline.prepend(newPlaceName);
  cardsOnline.prepend(newPhoto);
  cardsOnline.prepend(newAlt);

  placeText = '';
  newPhoto = '';
  newAlt = '';
}

function handleDelete (event) {
    const eventTarget = event.target;
    const cardItem = eventTarget.closest('.card');
    cardItem.remove();
  }

function handleLike (event) {
    const eventTarget = event.target;
    eventTarget.classList.toggle('card__like_active');
}
