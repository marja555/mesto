export default class UserInfo {
  constructor({ nameEl, jobEl, avatarEl }) {
    this._nameEl = nameEl;
    this._jobEl = jobEl;
    this._avatarEl = avatarEl;
  }

  getUserInfo() {
    this.userData = {}

    this.userData.name = this._nameEl.textContent;
    this.userData.about = this._jobEl.textContent;
    this.userData.avatar = this._avatarEl.style.backgroundImage;
    this.userData._id = this._id;

    return this.userData;
  }

  // setUserId(id) {
  //   this._id = id;
  // }

  setUserInfo({ name, about, avatar, _id }) {
    this._nameEl.textContent = name;
    this._jobEl.textContent = about;
    this._avatarEl.style.backgroundImage = `url(${avatar})`;
    this._id = _id;
  }

  // setAvatar(avatar) {
  //   this._avatarEl.style.backgroundImage = `url(${avatar})`;
  // }
}