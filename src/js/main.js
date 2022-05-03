// Get the elements you need to work with
const item = document.querySelector(".item");
const detailItem = document.querySelector(".detail");
const detailScene = document.querySelector(".scene.-detail");

// Hide detail view
detailScene.style.display = `none`;

// Create clickable area and define rect

// Define first transition
function mainTransistion() {
  const itemImage = item.querySelector("img");

  detailItem.setAttribute("data-image", item.getAttribute("data-key"));

  detailItem
    .querySelector("img")
    .setAttribute("src", itemImage.getAttribute("src"));

  detailScene.style.display = `block`;
  item.style.opacity = 0;

  let firstRect = item.getBoundingClientRect();
  let lastRect = detailItem.getBoundingClientRect();

  const detailAnimate = [
    {
      transform: `
          translateX(${firstRect.left - lastRect.left}px)
          translateY(${firstRect.top - lastRect.top}px)
          scale(${firstRect.width / lastRect.width})
        `,
    },
    {
      transform: `
          translateX(0)
          translateY(0)
          scale(1)
          `,
    },
  ];

  const detailTiming = {
    duration: 600,
    easing: "cubic-bezier(0.2, 0, 0.2, 1)",
  };
  detailItem.animate(detailAnimate, detailTiming);
}

// First transistion wired up
item.addEventListener("click", mainTransistion);

// Reverse
detailItem.addEventListener("click", () => {
  const item = document.querySelector(
    `[data-key="${detailItem.getAttribute("data-image")}"]`
  );

  let itemImageRect = item.getBoundingClientRect();
  let detailItemRect = detailItem.getBoundingClientRect();

  detailScene.style.display = "none";
  item.styleopacity = 1;

  const itemAnimate = [
    {
      zIndex: 2,
      transform: `
        translateX(${detailItemRect.left - itemImageRect.left}px)
        translateY(${(detailItemRect.top - itemImageRect, top)}px)
        scale(${detailItemRect.width / itemImageRect.width})
        `,
    },
    {
      zIndex: 2,
      transform: `
          translateX(0)
          translateY(0)
          scale(1)
          `,
    },
  ];

  const itemTiming = {
    duration: 600,
    easing: "cubic-bezier(0.2, 0, 0.2, 1)",
  };

  item.animate(itemAnimate, itemTiming);
});
