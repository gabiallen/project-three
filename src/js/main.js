// Get the elements you need to work with
var items = document.querySelectorAll(`.item`);
var detailItem = document.querySelector(".detail");
var detailScene = document.querySelector(".scene.-detail");

detailItems.style.display = `none`;

// Define the action
items.forEach((item) => {
  item.addEventListener(`click`, () => {
    detailItems.setAttribute("data-image", item.getAttribute("data-key"));

    detailItems
      .querySelector("img")
      .setAttribute("src", item.getAttribute("src"));

    let firstRect = item.getBoundingClientRect();
    let lastRect = detailItems.getBoundingClientRect();

    detailItems.animate(
      [
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
      ],
      {
        duration: 600,
        easing: "cubic-bezier(0.2, 0, 0.2, 1)",
      }
    );
  });
});

// Wire it up
detailItems.addEventListener("click", () => {
  const item = document.querySelector(
    `[data-key="${detailItems.getAttribute("data-image")}"]`
  );

  let itemRect = item.getBoundingClientRect();
  let detailItemRect = detailItems.getBoundingClientRect();

  detailScene.style.display = "none";
  item.styleopacity = 1;

  item.animate(
    [
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
    ],
    {
      duration: 600,
      easing: "cubic-bezier(0.2, 0, 0.2, 1)",
    }
  );
});
