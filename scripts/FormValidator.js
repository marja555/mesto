export default class FormValidator {
  constructor (data, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  _showInputError(inputItem) {
    inputItem.classList.add(this._inputErrorClass);
    const errorMessage = this._formSelector.querySelector(`#${inputItem.id}-error`);
    errorMessage.textContent = inputItem.validationMessage;
    errorMessage.classList.add(this._errorClass);
  }

  _hideInputError(inputItem) {

  }

  _checkInputIsValid(inputItem) {
    if (!inputItem.validity.valid) {
      this._showInputError(inputItem);
    } else {
      this._hideInputError(inputItem);
    }
  }

  _setEventListeners() {
    const inputs = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    const submitButton = this._formSelector.querySelector(this._submitButtonSelector);
    
    inputs.forEach(function (inputItem) {
      inputItem.addEventListener('input', () => {
        checkInputIsValid();
      });
    });
  }


  _enableValidation() {
    this._formSelector.addEventListener('submit', (evt) => 
      evt.preventDefault());
    this._setEventListeners(this._formSelector, rest);
  }
}
