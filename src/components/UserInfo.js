export default class UserInfo {
  constructor({ nameEl, jobEl, avatarEl }) {
    this._nameEl = nameEl;
    this._jobEl = jobEl;
    this._avatarEl = avatarEl;
  }

  getUserInfo(data) {
    this.userData = {}
    
    this._nameEl.textContent = data.name;
    this._jobEl.textContent = data.about;
    this._avatarEl.style.backgroundImage = data.avatar;

    return this.userData;
  }

  setUserId(id) {
    this._id = id;
  }

  setUserInfo({ name, about }) {
    this._nameEl.textContent = name;
    this._jobEl.textContent = about;
  }

  setAvatar(avatar) {
    this._avatarEl.style.backgroundImage = `url(${avatar})`;
  }
}