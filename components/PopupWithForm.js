import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor ({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._formInputs = this._popup.querySelectorAll('.popup__input');
    console.log(this._formInputs)
    this._formValues = {};
    

    this._formInputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    
    })
    return this._formValues;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this._form.reset();
    this.close();
}

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmit);
  }

  close() {
    super.close(); 
  }
}
