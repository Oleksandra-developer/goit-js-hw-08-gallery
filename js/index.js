import items from "./gallery__items.js";
function createItems(src, alt = "img", sourse) {
   
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    img.setAttribute("data-sourse", sourse)
    img.classList.add("gallery__image");

    const a = document.createElement("a");
    a.setAttribute("href", sourse);
    a.classList.add("gallery__link");
    a.appendChild(img);
    li.appendChild(a);
        return li;
}
let galleryItems = items.map((item) => {
    const { preview, original, description } = item;
    const itemImg = createItems(preview, description, original);
    // console.log(x);
    return itemImg;
}
)
const list = document.querySelector("ul");

list.append(...galleryItems);
// console.log(list)

const parentGallery = document.querySelector('.js-gallery');
console.log(parentGallery);
const modalWindow = document.querySelector(".js-lightbox");
const openedImgInModal = document.querySelector(".lightbox__image");
// 1. открыть модалку
const openModal = event => {
    event.preventDefault();
    modalWindow.classList.add("is-open");
    openedImgInModal.src = event.target.dataset.sourse;
    // Prewiev or original??
    openedImgInModal.alt = event.target.alt;
    console.log(event.target);
}
parentGallery.addEventListener("click", openModal);
// 2. закрыть модалку кнопкой
const closeBtn = document.querySelector('.js-lightbox button[data-action="close-lightbox"]');
// console.log(closeBtn);
function closeModal () {
    modalWindow.classList.remove("is-open");
    openedImgInModal.src = '';
}
closeBtn.addEventListener("click", closeModal);
// 3. закрыть модалку кликом на оверлей
const overlay = document.querySelector(".lightbox__overlay");
overlay.addEventListener("click", closeModal);
// 4.  закрыть модалку клавишей Esc
function handleKeyDown(e) {
  if (e.code === "Escape") {
    modalWindow.classList.remove("is-open");
    openedImgInModal.src = '';
  }
}
window.addEventListener("keydown", handleKeyDown);

