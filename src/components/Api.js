
export default class Api {
  constructor({adress, token}) {
    this._adress = adress;
    this._token = token;
  }

  _handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getCards() {
    return fetch(`${this._adress}/cards`, {
      headers: {
        authorization: this._token
      }
    }).then(this._handleResponse);
  }

  addCard({place, image}) {
    return fetch(`${this._adress}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: place,
        link: image
      })
    })
    .then(this._handleResponse)
  }

  getUser() {
    return fetch(`${this._adress}/users/me`, {
      headers: {
        authorization: this._token
      }
    }).then(this._handleResponse)
  }

  editUserInfo({name, job}) {
    return fetch(`${this._adress}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about: job
      })
    })
    .then(this._handleResponse)
  }

  deleteCard(_id) {
    return fetch(`${this._adress}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse)
  }
}