export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_type_opened');
    document.addEventListener('keydown', () => {
      this._handleEscClose();
    });
  this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_type_opened');
    document.removeEventListener('keydown', () => {
      this._handleEscClose();
    });
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
      console.log(evt.key);
    }
  }

  setEventListeners() {
    const closePopupBtn = this._popup.querySelector('.popup__close');
    closePopupBtn.addEventListener('click', () => {
      this.close();
    });

    const popupOverlay = this._popup.querySelector('.popup__overlay');
    popupOverlay.addEventListener('click', () => {
      this.close();
    })
  }
}