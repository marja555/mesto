(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".popup__form_type_profile"),r=document.querySelector(".popup__form_type_place"),o=n.querySelector(".popup__input_type_name"),i=n.querySelector(".popup__input_type_profession"),u=document.querySelector(".profile__name"),a=document.querySelector(".profile__profession"),c=document.querySelector(".profile__add-button"),s=document.querySelector(".cards");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(){function e(t,n){var r=this,o=t.cardData,i=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_handleDelete",(function(){r._element.remove()})),p(this,"_handleLike",(function(){r._element.querySelector(".card__like").classList.toggle("card__like_active")})),this._image=o.link,this._title=o.name,this._cardSelector=n,this._handleCardClick=i}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generate",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".card__image");return e.src=this._image,e.alt=this._title,this._element.querySelector(".card__title").textContent=this._title,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){this._element.querySelector(".card__del-button").addEventListener("click",this._handleDelete),this._element.querySelector(".card__like").addEventListener("click",this._handleLike),this._element.querySelector(".card__image").addEventListener("click",this._handleCardClick)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._renderedItems=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButton=this._form.querySelector(t.submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleInactiveState",value:function(){this._hasInvalidInput(this._inputList)?this.setInactiveButton():(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}},{key:"setInactiveButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"_showInputError",value:function(e,t){e.classList.add(this._inputErrorClass);var n=this._form.querySelector("#".concat(e.id,"-error"));n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){e.classList.remove(this._inputErrorClass);var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._errorClass)}},{key:"removeInputError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_checkInputIsValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleInactiveState(this._inputList),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputIsValid(t),e._toggleInactiveState(e._inputList)}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_type_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_type_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closePopupBtn=this._popup.querySelector(".popup__close"),this._closePopupBtn.addEventListener("click",(function(){e.close()})),this._popup.querySelector(".popup__overlay").addEventListener("click",(function(){e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__pic"),t._title=t._popup.querySelector(".popup__pic-title"),t}return t=u,(n=[{key:"open",value:function(e,t){E(j(u.prototype),"open",this).call(this),this._image.src=t,this._title.textContent=e,this._image.alt=e}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function B(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e){var t,n,r,o,a=e.popupSelector,c=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),o=function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t._form.reset()},(r="_handleSubmit")in(n=x(t=i.call(this,a)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._handleFormSubmit=c,t._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formInputs=this._popup.querySelectorAll(".popup__input"),this._formValues={},this._formInputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){I(R(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.nameEl,r=t.jobEl;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameEl=n,this._jobEl=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this.userData={},this.userData.name=this._nameEl.textContent,this.userData.job=this._jobEl.textContent,this.userData}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job;this._nameEl.textContent=t,this._jobEl.textContent=n}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),F=new O(".popup_type_pic");F.setEventListeners();var U=new h({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=N(e);U.addItem(t)}},s);U.renderItems();var A=new D({popupSelector:".popup_type_place",handleFormSubmit:function(e){var t=N({name:e.place,link:e.image});U.prependItem(t),A.close()}});A.setEventListeners();var z=new V({nameEl:u,jobEl:a}),M=new D({popupSelector:".popup_type_profile",handleFormSubmit:function(e){var t=e.name,n=e.job;z.setUserInfo({name:t,job:n}),M.close()}});function N(e){return new f({cardData:e,handleCardClick:function(){F.open(e.name,e.link)}},"#cardTemplate").generate()}M.setEventListeners(),c.addEventListener("click",(function(){A.open(),G.removeInputError(),G.setInactiveButton()})),t.addEventListener("click",(function(){M.open();var e=z.getUserInfo();o.value=e.name,i.value=e.job,H.removeInputError(),H.setInactiveButton()}));var G=new d(e,r);G.enableValidation();var H=new d(e,n);H.enableValidation()})();