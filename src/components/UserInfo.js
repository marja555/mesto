export default class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._nameSelector = nameSelector;
    this._infoSelector = infoSelector;
  }

  getUserInfo() {
    this.userData = {}

    this.userData.nameOfUser = this._nameSelector.textContent;
    this.userData.jobOfUser = this._infoSelector.textContent;
    
    return this.userData;
  }

  setUserInfo({ name, job }) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = job;
  }
}