import Popup from "./Popup";

export default class PopupWithFormSubmit extends Popup {
  constructor(popupSelector) {
  super(popupSelector);
  }

  setSubmitAction(actionFunc) {
    this._handleSubmitCallback = actionFunc;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener('submit',  (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
      //this._popup.close();
    });
  }
}