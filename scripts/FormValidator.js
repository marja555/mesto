export default class FormValidator {
  constructor (data, form) {
    this._form = form;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  _hasInvalidInput(inputs) {
    return inputs.some((inputItem) => {
      return !inputItem.validity.valid
    })
  }

  /*_addInactiveButton(inputs) {
    if (this._hasInvalidInput(inputs)) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = true;
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = false;
    }
  }*/

  _showInputError(inputItem, errorMessageText) {
    inputItem.classList.add(this._inputErrorClass);
    const errorMessage = this._form.querySelector(`#${inputItem.id}-error`);
    errorMessage.textContent = errorMessageText;
    console.log(errorMessageText)
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
      console.log(inputItem)
    } else {
      this._hideInputError(inputItem);
    }
  }
  

  _setEventListeners() {
    const inputs = Array.from
        (this._form.querySelectorAll(this._inputSelector));

   // this._addInactiveButton(inputs);

    inputs.forEach(function (inputItem) {
      inputItem.addEventListener('input', () => {
        inputItem.this._checkInputIsValid();
     //   this._addInactiveButton(inputs);
      });
    });
  }


  enableValidation() {
    this._form.addEventListener('submit', (evt) => 
      evt.preventDefault());
    this._setEventListeners();
  }
}
