const items = document.querySelectorAll(`.item`);
const detailItem = document.querySelector(`.detail`);

detailScene.style.display = `none`;

items.forEach((item) => {
  item.addEventListener(`click`, () => {
    const itemImage = item.querySelector(`img`);

    detailItem
      .querySelector(`img`)
      .setAttribute(`src`, itemImage.getAttribute(`src`));
  });
});
