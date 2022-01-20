export default class UserInfo {
  constructor({ userName, userInfo }) {
    this._userName = userName;
    this._userInfo = userInfo;
  }

  getUserInfo() {
    const nameInput = document.querySelector('.popup__input_type_name');
    const jobInput = document.querySelector('.popup__input_type_profession');

    this.userData = {}
    //this._userData[this._userName] = nameInput.value;
    //this._userData[this._userInfo] = jobInput.value;

    this.userData[nameInput.value] = this._userName;
    this.userData[jobInput.value] = this._userInfo;
    console.log(nameInput)
    return this.userData;
  }

  setUserInfo() {
    
  }
}