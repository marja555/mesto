export default class UserInfo {
  constructor({ userName, userInfo }) {
    this._userName = userName;
    this._userInfo = userInfo;
  }

  getUserInfo() {
    this.userData = {}

    this.userData[userName] = this._userName;
    this.userData[userJob] = this._userInfo;
    return this.userData;
  }

  setUserInfo(data) {
    key0 = Object.keys(data)[0];
    key1 = Object.keys(data)[1];
    value0 = data[key0];
    value1 = data[key1];

    this._userName = value0;
    this._userInfo = value1;
  }
}