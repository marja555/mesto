const pageContainer = document.querySelector('.page__container');
const profile = pageContainer.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const formProfileElement = document.querySelector('.popup__form_type_profile');
const formPlaceElement = document.querySelector('.popup__form_type_place');
const nameInput = formProfileElement.querySelector('.popup__input_type_name');
const jobInput = formProfileElement.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const popupPic = document.querySelector('.popup_type_pic');
const popupBigImage = document.querySelector('.popup__pic');
const popupPicTitle = document.querySelector('.popup__pic-title');
const closePopupProfileBtn = popupProfile.querySelector('.popup__close');
const closePopupPlaceBtn = popupPlace.querySelector('.popup__close');
const closePopupPicBtn = popupPic.querySelector('.popup__close');
const addButton = profile.querySelector('.profile__add-button');
const placeInput = document.querySelector('.popup__input_type_place');
const photoInput = document.querySelector('.popup__input_type_photo-link');
const cardsOnline = document.querySelector('.cards');
const popupProfileOverlay = popupProfile.querySelector('.popup__overlay');
const popupPlaceOverlay = popupPlace.querySelector('.popup__overlay');
const popupPicOverlay = popupPic.querySelector('.popup__overlay');


function openPopup(popup) {
  popup.classList.add('popup_type_opened');
  document.addEventListener('keydown', (evt) => {
    closeByEscape(evt, popup);
  });
  clearInput();
}

function clearInput () {
  inputs.forEach ( (inputItem) => {
    inputItem.classList.remove('popup__input_type_error');
  });
  const errors = Array.from(document.querySelectorAll('.popup__input-error'));
  errors.forEach( (error) => {
    error.classList.remove('popup__input-error_visible');
  })
}

function closeByEscape(evt, popup) {
  if (evt.key === 'Escape') {
      closePopup (popup);
    }
}

function openPopupProfile () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

function openPopupPlace () {
  openPopup(popupPlace);
  formPlaceElement.reset();
}

function closePopup(popup) {
  popup.classList.remove('popup_type_opened');
  document.removeEventListener('keydown', (evt) => {
    closeByEscape(evt, popup);
  })
}

function formProfileSubmitHandler () {
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProfile);
}

function formPlaceSubmitHandler () {
  const inputs = {
    name: placeInput.value,
    link: photoInput.value,
    alt: placeInput.value
  };
  
  const newCard = getCard(inputs);
  
  cardsOnline.prepend(newCard);

  closePopup(popupPlace);
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
  cardPicture.addEventListener('click', () => { 
    handleImgClick (el.name, el.link)});
  
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

function handleImgClick (name, link) {
  popupPicTitle.textContent = name;
  popupBigImage.src = link;
  popupBigImage.alt = name;
  openPopup(popupPic);
}


addButton.addEventListener('click', openPopupPlace);

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

popupProfileOverlay.addEventListener('click', () => {
  closePopup(popupProfile);
});

popupPlaceOverlay.addEventListener('click', () => {
    closePopup(popupPlace);
});

popupPicOverlay.addEventListener('click', () => {
  closePopup(popupPic);
});

formProfileElement.addEventListener('submit', formProfileSubmitHandler);

formPlaceElement.addEventListener('submit', formPlaceSubmitHandler);