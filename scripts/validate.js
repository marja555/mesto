


function showInputError (formItem, inputItem, inputErrorClass, 
  errorMessageText, errorMessageClass) 
  {
  inputItem.classList.add(inputErrorClass);
  const errorMessage = formItem.querySelector(`#${inputItem.id}-error`);
  errorMessage.textContent = errorMessageText;
  errorMessage.classList.add(errorMessageClass);
}

function hideInputError (formItem, inputItem, inputErrorClass, errorMessageClass) {
  const errorMessage = formItem.querySelector(`#${inputItem.id}-error`);
  errorMessage.textContent = '';
  errorMessage.classList.remove(errorMessageClass);
  inputItem.classList.remove(inputErrorClass);
}

function checkInputIsValid (formItem, inputItem, { errorClass, inputErrorClass }) {
  if (!inputItem.validity.valid) {
    showInputError(formItem, inputItem, inputErrorClass, 
                 inputItem.validationMessage, errorClass);
  } else {
    hideInputError (formItem, inputItem, errorClass, inputErrorClass);
    
  }
}

const setEventListener = (formItem, { inputSelector, ...rest }) => {
  const inputs = Array.from(formItem.querySelectorAll(inputSelector));
  inputs.forEach(function (inputItem) {
    inputItem.addEventListener('input', () => {
      checkInputIsValid (formItem, inputItem, rest);
    });
  });
}

const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(function (formItem) {
    formItem.addEventListener('submit', function (event) {
    event.preventDefault();
    });
    setEventListener(formItem, rest);
  });

};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
}); 
