export default class UserInfo {
  constructor({ nameEl, jobEl }) {
    this._nameEl = nameEl;
    this._jobEl = jobEl;
  }

  getUserInfo() {
    this.userData = {}

    this.userData.name = this._nameEl.textContent;
    this.userData.job = this._jobEl.textContent;
    
    return this.userData;
  }

  setUserInfo({ name, job }) {
    this._nameEl.textContent = name;
    this._jobEl.textContent = job;
  }
}