const pageContainer = document.querySelector('.page__container');
const profile = pageContainer.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const formProfileElement = document.querySelector('.form_type_profile');
const formPlaceElement = document.querySelector('.form_type_place');
const nameInput = formProfileElement.querySelector('.form__text_type_name');
const jobInput = formProfileElement.querySelector('.form__text_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const popupPic = document.querySelector('.popup_type_pic');
const closePopupProfileBtn = popupProfile.querySelector('.popup__close');
const closePopupPlaceBtn = popupPlace.querySelector('.popup__close');
const closePopupPicBtn = popupPic.querySelector('.popup__close');
const addButton = profile.querySelector('.profile__add-button');
const placeInput = document.querySelector('.form__text_type_place');
const photoInput = document.querySelector('.form__text_type_photo-link');
const cardsOnline = document.querySelector('.cards');
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

function openPopup(popup) {
  popup.classList.add('popup_type_opened');
}

function openPopupProfile () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup_type_opened');
}

function formProfileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProfile);
}

function formPlaceSubmitHandler (evt) {
  evt.preventDefault();
  const inputs = {
    name: placeInput.value,
    link: photoInput.value,
    alt: placeInput.value
  };
  
  const newCard = getCard(inputs);
  
  cardsOnline.prepend(newCard);

  closePopup(popupPlace);

  formPlaceElement.reset(); 
}

function getCard(el) {
  const cardTemplate = document.querySelector('#cardTemplate').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardPicture = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__title').textContent = el.name;
  cardPicture.src = el.link;
  cardPicture.alt = el.alt;

  const delButton = cardElement.querySelector('.card__del-button');
  delButton.addEventListener('click', handleDelete);

  const likeButton = cardElement.querySelector('.card__like');
  likeButton.addEventListener('click', handleLike);

  cardPicture.addEventListener('click', handleImgClick);
  
  return cardElement;
}

function render() {
  const htmlCard = initialCards.map((el) => {
    return getCard(el);
  });
  cardsOnline.append(...htmlCard);
}

render();

function handleDelete (event) {
  const eventTarget = event.target;
  const cardItem = eventTarget.closest('.card');
  cardItem.remove();
}

function handleLike (event) {
  const eventTarget = event.target;
  eventTarget.classList.toggle('card__like_active');
}

function handleImgClick (event) {
  const eventTarget = event.target;
  const cardItem = eventTarget.closest('.card');
  const popupBigImage = document.querySelector('.popup__pic');
  const popupPicTitle = document.querySelector('.popup__pic-title');
  popupPicTitle.textContent = cardItem.textContent;
  popupBigImage.src = cardItem.querySelector('.card__image').src;
  popupBigImage.alt = cardItem.textContent;
  openPopup(popupPic);
}

addButton.addEventListener('click', () => {
  openPopup(popupPlace);
});

editButton.addEventListener('click', openPopupProfile);

closePopupProfileBtn.addEventListener('click', () => {
  closePopup(popupProfile);
});

closePopupPlaceBtn.addEventListener('click', () => {
  closePopup(popupPlace);
});

closePopupPicBtn.addEventListener('click', () => {
  closePopup(popupPic);
});

formProfileElement.addEventListener('submit', formProfileSubmitHandler);
formPlaceElement.addEventListener('submit', formPlaceSubmitHandler);