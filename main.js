(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".popup__form_type_profile"),r=document.querySelector(".popup__form_type_place"),o=n.querySelector(".popup__input_type_name"),i=n.querySelector(".popup__input_type_profession"),u=document.querySelector(".profile__name"),a=document.querySelector(".profile__profession"),c=document.querySelector(".profile__add-button");function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.querySelector(".cards");var p=function(){function e(t,n){var r=this,o=t.cardData,i=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_handleDelete",(function(){r._element.remove()})),l(this,"_handleLike",(function(){r._element.querySelector(".card__like").classList.toggle("card__like_active")})),this._image=o.link,this._title=o.name,this._cardSelector=n,this._handleCardClick=i}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generate",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".card__image");return e.src=this._image,e.alt=this._title,this._element.querySelector(".card__title").textContent=this._title,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){this._element.querySelector(".card__del-button").addEventListener("click",this._handleDelete),this._element.querySelector(".card__like").addEventListener("click",this._handleLike),this._element.querySelector(".card__image").addEventListener("click",this._handleCardClick)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButton=this._form.querySelector(t.submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleInactiveState",value:function(){this._hasInvalidInput(this._inputList)?this.setInactiveButton():(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}},{key:"setInactiveButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"_showInputError",value:function(e,t){e.classList.add(this._inputErrorClass);var n=this._form.querySelector("#".concat(e.id,"-error"));n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){e.classList.remove(this._inputErrorClass);var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._errorClass)}},{key:"removeInputError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_checkInputIsValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleInactiveState(this._inputList),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputIsValid(t),e._toggleInactiveState(e._inputList)}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_type_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_type_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closePopupBtn=this._popup.querySelector(".popup__close"),this._closePopupBtn.addEventListener("click",(function(){e.close()})),this._popup.querySelector(".popup__overlay").addEventListener("click",(function(){e.close()}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function g(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__pic"),t._title=t._popup.querySelector(".popup__pic-title"),t}return t=u,(n=[{key:"open",value:function(e,t){b(w(u.prototype),"open",this).call(this),this._image.src=t,this._title.textContent=e,this._image.alt=e}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function P(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t,n,r,o,a=e.popupSelector,c=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),o=function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t._form.reset()},(r="_handleSubmit")in(n=I(t=i.call(this,a)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._handleFormSubmit=c,t._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formInputs=this._popup.querySelectorAll(".popup__input"),this._formValues={},this._formInputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){O(q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.nameEl,r=t.jobEl;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameEl=n,this._jobEl=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this.userData={},this.userData.name=this._nameEl.textContent,this.userData.job=this._jobEl.textContent,this.userData}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job;this._nameEl.textContent=t,this._jobEl.textContent=n}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._adress=t,this._token=n}var t,n;return t=e,(n=[{key:"getCards",value:function(){return fetch("".concat(this._adress,"/cards"),{headers:{authorisation:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({adress:"https://mesto.nomoreparties.co/v1/cohort-35",token:"046e1e7e-a85b-4246-8cd0-fe8501647960"}).getCards().then((function(e){cardsList.renderItems(e)})).catch((function(e){return console.log(e)}));var x=new S(".popup_type_pic");x.setEventListeners();var V=new B({popupSelector:".popup_type_place",handleFormSubmit:function(e){var t,n=e.place,r=e.image,o=new p({cardData:t={name:n,link:r},handleCardClick:function(){x.open(t.name,t.link)}},"#cardTemplate").generate();cardsList.prependItem(o),V.close()}});V.setEventListeners();var F=new D({nameEl:u,jobEl:a}),U=new B({popupSelector:".popup_type_profile",handleFormSubmit:function(e){var t=e.name,n=e.job;F.setUserInfo({name:t,job:n}),U.close()}});U.setEventListeners(),c.addEventListener("click",(function(){V.open(),A.removeInputError(),A.setInactiveButton()})),t.addEventListener("click",(function(){U.open();var e=F.getUserInfo();o.value=e.name,i.value=e.job,M.removeInputError(),M.setInactiveButton()}));var A=new _(e,r);A.enableValidation();var M=new _(e,n);M.enableValidation()})();