/*
    Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.

    Разбей задание на несколько подзадач:
        * Создание и рендер разметки по массиву данных и предоставленному шаблону.
        * Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
        * Открытие модального окна по клику на элементе галереи.
        * Подмена значения атрибута src элемента img.lightbox__image.
        * Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
        * Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы 
          при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

    Разметка элемента галереи
    Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, 
    и указываться в href ссылки (это необходимо для доступности).

    Дополнительно
    Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.
        Закрытие модального окна по клику на div.lightbox__overlay.
        Закрытие модального окна по нажатию клавиши ESC.
        Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
*/

import gallery from './gallery-items.js';
import { gellaryItemCreator } from './tagsCreator.js';

const refs = {
  gellery: document.querySelector('.js-gallery'),
  openModal: document.querySelector('.js-lightbox'),
  closeModal: document.querySelector('.lightbox__button'),
  largeImg: document.querySelector('.lightbox__image'),
};

const galleryLayout = gallery.map(item => gellaryItemCreator(item)).join('');
refs.gellery.insertAdjacentHTML('beforeend', galleryLayout);

refs.gellery.addEventListener('click', clickOnImg);
refs.closeModal.addEventListener('click', clickOnBtn);

function clickOnImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  const imgRef = event.target;
  const largeImgURL = imgRef.dataset.source;
  const imgAltRef = imgRef.alt;

  openModal();
  setLargeImgSrc(largeImgURL, imgAltRef);
}

const openModal = () => refs.openModal.classList.add('is-open');

const setLargeImgSrc = (url, alt) => {
  refs.largeImg.src = url;
  refs.largeImg.alt = alt;
};

function clickOnBtn(event) {
  const btnRef = event.target;

  if (btnRef.nodeName !== 'BUTTON') return;

  closeModal();
  setLargeImgSrc('', '');
}

const closeModal = () => refs.openModal.classList.remove('is-open');
