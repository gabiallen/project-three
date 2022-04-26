// Get the elements you need to work with
var items = document.querySelectorAll(".item");
var detailItem = document.querySelector(".detail");
var detailScene = document.querySelector(".scene.-detail");

detailScene.style.display = "none";

// Define the action
items.forEach((item) => {
  item.addEventListener("click", () => {
    var itemImage = item.querySelector("img");

    detailItem.setAttribute("data-image", item.getAttribute("data-key"));

    detailItem
      .querySelector("img"
      .setAttribute("src", itemImage.getAttribute("src"));

    let firstRect = itemImage.getBoundingClientRect();
    let lastRect = detailItem.getBoundingClientRect();

    detailItem.animate(
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
        easing: "cubic-bezier(0,2, 0, 0.2, 1)",
      }
    );
  });
});

// Wire it up
detailItem.addEventListener("click", () => {
  const itemImage = document.querySelector(
    `[data-key="${detailItem.getAttribute("data-image")}"]`
  );

  let itemImageRect = itemImage.getBoundingClientRect();
  let detailItemRect = detailItem.getBoundingClientRect();

  detailScene.style.display = "none";
  itemImage.styleopacity = 1;

  itemImage.animate(
    [
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
    ],
    {
      duration: 600,
      easing: "cubic-bezier(0.2, 0, 0.2, 1)",
    }
  );
});
