export const gellaryItemCreator = image => {
  return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${image.original}"
      >
          <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          >
      </a>
  </li>
  `;
};
