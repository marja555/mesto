import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__pic');
    this._title = this._popup.querySelector('.popup__pic-title');
  }

  open(title, link) {
    super.open();

     this._image.src = link;
     this._title.textContent = title;
     this._image.alt = title;
  }
}