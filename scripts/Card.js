const popupBigImage = document.querySelector('.popup__pic');
const popupPicTitle = document.querySelector('.popup__pic-title');
const popupPic = document.querySelector('.popup_type_pic');

export default class Card {
  constructor (validationConfig, cardSelector, openPopupHandler) {
    this._image = validationConfig.link;
    this._title = validationConfig.name;
    this._cardSelector = cardSelector;
    this._openPopupHandler = openPopupHandler;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)
    return cardElement;
  }

  generate() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.card__image');
    cardImage.src = this._image;
    cardImage.alt = this._title;
    this._element.querySelector('.card__title').textContent = this._title;
    this._setEventListeners();

    return this._element;
  }

  _handleDelete = () => {
    this._element.remove();
  }
  
  _handleLike = () => {
    const likeButton = this._element.querySelector('.card__like');
    likeButton.classList.toggle('card__like_active');
  }

  _handleImgClick = () => {  
    popupBigImage.src = this._image;
    popupBigImage.alt = this._title;
    popupPicTitle.textContent = this._title;
    this._openPopupHandler(popupPic);
  }

  _setEventListeners() {
    const delButton = this._element.querySelector('.card__del-button');
    delButton.addEventListener('click', this._handleDelete);
    const likeButton = this._element.querySelector('.card__like');
    likeButton.addEventListener('click', this._handleLike);
    const cardImage = this._element.querySelector('.card__image');
    cardImage.addEventListener('click', this._handleImgClick);
  }
}

