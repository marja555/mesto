

export default class Card {
  constructor ({ cardData, handleCardClick }, cardSelector) {
    this._image = cardData.link;
    this._title = cardData.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    const delButton = this._element.querySelector('.card__del-button');
    delButton.addEventListener('click', this._handleDelete);
    const likeButton = this._element.querySelector('.card__like');
    likeButton.addEventListener('click', this._handleLike);
    const cardImage = this._element.querySelector('.card__image');
    cardImage.addEventListener('click', this._handleCardClick);
  }
}

