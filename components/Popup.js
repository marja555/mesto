export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    //this._handleEscClose(evt) = this._handleEscClose(evt).bind(this);
  }

  open() {
    this._popup.classList.add('popup_type_opened');
    
    this.setEventListeners();
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    this._popup.classList.remove('popup_type_opened');
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._closePopupBtn = this._popup.querySelector('.popup__close');
    this._closePopupBtn.addEventListener('click', () => {
      this.close();
    });

    const popupOverlay = this._popup.querySelector('.popup__overlay');
    popupOverlay.addEventListener('click', () => {
      this.close();
    })
  }
}