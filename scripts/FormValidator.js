export default class FormValidator {
  constructor (validationConfig, form) {
    this._form = form;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButton = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
  }

  _hasInvalidInput() {
    return this._inputs.some((inputItem) => {
      return !inputItem.validity.valid
    })
  }

  _addInactiveButton() {
    if (this._hasInvalidInput(this._inputs)) {
      this._submitButton = 
            this._form.querySelector('.popup__submit-button');
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _showInputError(inputItem, errorMessageText) {
    inputItem.classList.add(this._inputErrorClass);
    const errorMessage = this._form.querySelector(`#${inputItem.id}-error`);
    errorMessage.textContent = errorMessageText;
    errorMessage.classList.add(this._errorClass);
  }

  _hideInputError(inputItem) {
    inputItem.classList.remove(this._inputErrorClass);
    const errorMessage = this._form.querySelector(`#${inputItem.id}-error`);
    errorMessage.textContent = '';
    errorMessage.classList.remove(this._errorClass);
  }

  _checkInputIsValid(inputItem) {
    if (!inputItem.validity.valid) {
      this._showInputError(inputItem, inputItem.validationMessage);
    } else {
      this._hideInputError(inputItem);
    }
  }
  
  _setEventListeners() {
    this._inputs = Array.from
       (this._form.querySelectorAll(this._inputSelector));

    this._addInactiveButton(this._inputs);

    this._inputs.forEach( (inputItem) => {
      inputItem.addEventListener('input', () => {
        this._checkInputIsValid(inputItem);
        
        this._addInactiveButton(this._inputs);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => 
      evt.preventDefault());
    this._setEventListeners();
  }
}