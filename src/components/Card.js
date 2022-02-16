export default class Card {
  constructor ({ cardData, handleCardClick, handleDeleteBtnClick, userId, handleLike }, cardSelector) {
    this._image = cardData.link;
    this._title = cardData.name;
    this._likes = cardData.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._id = cardData._id;
    this._userId = userId;
    this._ownerId = cardData.owner._id;
    this._handleDeleteBtnClick = handleDeleteBtnClick; 
    this._handleLike = handleLike;
    this._element = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    this._cardImage = this._element.querySelector('.card__image');
    this._likeButton = this._element.querySelector('.card__like');
    this._delButton = this._element.querySelector('.card__del-button');
    this._likesCounter = this._element.querySelector('.card__likes-counter');
    this._isLiked = this._likes.some((item) => {
      return item._id === userId;
    });
    this.setIsLiked();
  }

  generate() {
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._element.querySelector('.card__title').textContent = this._title;
    this._likesCounter.textContent = this._likes.length;
    this._setEventListeners();
    this._checkIfOwnerCard();

    return this._element;
  }
  
  _checkIfOwnerCard() {
    if (this._userId !== this._ownerId) {
      this._delButton.classList.add('card__del-button_inactive');
    }  
  }

  getId() {
    return this._id;
  }

  deleteCard() {
    this._element.remove();
  }

  setIsLiked() {
    if (this._isLiked) {
      this._likeButton.classList.add('card__like_active');
    }
  }

  updateLike(data) {
    if (this._isLiked) {
      this._deleteLike(data);
    } else {
      this._addLike(data);
    }
  }

  _deleteLike(data) {
    this._likesCounter.textContent = data.likes.length;
    this._likeButton.classList.remove('card__like_active');
    this._isLiked = false;
  }

  _addLike(data) {
    this._likesCounter.textContent = data.likes.length;
    this._likeButton.classList.add('card__like_active');
    this._isLiked = true;
  }

  _setEventListeners() {
    this._delButton.addEventListener('click', this._handleDeleteBtnClick);
    this._likeButton.addEventListener('click', () => this._handleLike(this));
    this._cardImage.addEventListener('click', this._handleCardClick);
  }
}