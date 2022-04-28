// Get the elements you need to work with
const item = document.querySelector(".item");
const detailItem = document.querySelector(".detail");
const detailScene = document.querySelector(".scene.-detail");

// Hide detail view
detailScene.style.display = `none`;

const firstRect = item.getBoundingClientRect();
const lastRect = detailItem.getBoundingClientRect();

// Detail view animation components
function handleTransition() {
  document.documentTransition
    .prepare({
      rootTransition: "reveal-left",
      duration: 300,
      sharedElements: [e1, e2, e3],
    })
    .then(() => {
      doCustomThings();
      document.documentTransition
        .start({ sharedElements: [newE1, newE2, newE3] })
        .then(() => console.log("transition finished"));
    });
}

function mainTransistion() {
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

item.addEventListener("click", mainTransistion);

// reverse
detailItem.addEventListener("click", () => {
  const item = document.querySelector(
    `[data-key="${detailItem.getAttribute("data-image")}"]`
  );

  let itemRect = item.getBoundingClientRect();
  let detailItemRect = detailItem.getBoundingClientRect();

  detailScene.style.display = "none";
  item.styleopacity = 1;

  const itemAnimate = [
    {
      zIndex: 2,
      transform: `
        translateX(${detailItemRect.left - itemRect.left}px)
        translateY(${(detailItemRect.top - itemRect, top)}px)
        scale(${detailItemRect.width / itemRect.width})
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
