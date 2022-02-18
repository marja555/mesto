export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopupBtn = this._popup.querySelector('.popup__close');
  }

  open() {
    this._popup.classList.add('popup_type_opened');
    
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_type_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._closePopupBtn.addEventListener('click', () => {
      this.close();
    });

    const popupOverlay = this._popup.querySelector('.popup__overlay');
    popupOverlay.addEventListener('mousedown', () => {
      this.close();
    })
  }

  getSubmitButton() {
    return this._submitButton;
  }
}