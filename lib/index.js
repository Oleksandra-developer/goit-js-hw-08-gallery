"use strict";

var _gallery__items = _interopRequireDefault(require("./gallery__items.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createItems(src) {
  var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "img";
  var sourse = arguments.length > 2 ? arguments[2] : undefined;
  var li = document.createElement("li");
  li.classList.add("gallery__item");
  var img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  img.setAttribute("data-sourse", sourse);
  img.classList.add("gallery__image");
  var a = document.createElement("a");
  a.setAttribute("href", sourse);
  a.classList.add("gallery__link");
  a.appendChild(img);
  li.appendChild(a);
  return li;
}

var galleryItems = _gallery__items["default"].map(function (item) {
  var preview = item.preview,
      original = item.original,
      description = item.description;
  var itemImg = createItems(preview, description, original); // console.log(x);

  return itemImg;
});

var list = document.querySelector("ul");
list.append.apply(list, _toConsumableArray(galleryItems)); // console.log(list)

var parentGallery = document.querySelector('.js-gallery');
console.log(parentGallery);
var modalWindow = document.querySelector(".js-lightbox");
var openedImgInModal = document.querySelector(".lightbox__image"); // 1. открыть модалку

var openModal = function openModal(event) {
  event.preventDefault();
  modalWindow.classList.add("is-open");
  openedImgInModal.src = event.target.dataset.sourse; // Prewiev or original??

  openedImgInModal.alt = event.target.alt;
  console.log(event.target);
};

parentGallery.addEventListener("click", openModal); // 2. закрыть модалку кнопкой

var closeBtn = document.querySelector('.js-lightbox button[data-action="close-lightbox"]'); // console.log(closeBtn);

function closeModal() {
  modalWindow.classList.remove("is-open");
  openedImgInModal.src = '';
}

closeBtn.addEventListener("click", closeModal); // 3. закрыть модалку кликом на оверлей

var overlay = document.querySelector(".lightbox__overlay");
overlay.addEventListener("click", closeModal); // 4.  закрыть модалку клавишей Esc

function handleKeyDown(e) {
  if (e.code === "Escape") {
    modalWindow.classList.remove("is-open");
    openedImgInModal.src = '';
  }
}

window.addEventListener("keydown", handleKeyDown);