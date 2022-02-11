export default class UserInfo {
  constructor({ nameEl, jobEl, avatarEl }) {
    this._nameEl = nameEl;
    this._jobEl = jobEl;
    this._avatarEl = avatarEl;
  }

  getUserInfo(data) {
    this.userData = {}

    // this.userData.name = this._nameEl.textContent;
    // this.userData.job = this._jobEl.textContent;
    // this.userData.avatar = this._avatarEl.src;
    
    this._nameEl.textContent = data.name;
    this._jobEl.textContent = data.about;
    this._avatarEl.src = data.avatar;

    return this.userData;
  }

  getUserId(data) {
    return data._id;
  }

  setUserInfo({ name, about }) {
    this._nameEl.textContent = name;
    this._jobEl.textContent = about;
  }
}