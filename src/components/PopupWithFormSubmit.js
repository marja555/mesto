import Popup from "./Popup";

export default class PopupWithFormSubmit extends Popup {
  constructor(popupSelector) {
  super(popupSelector);
  this._form = this._popup.querySelector('.popup__form_type_submit')
  }

  setSubmitAction(actionFunc) {
    this._handleSubmitCallback = actionFunc;
    console.log(this)
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
      this.close();
    });
  }
}