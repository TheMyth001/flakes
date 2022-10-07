const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const numberOfItems = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    clickCounter++;
    if (numberOfItems - clickCounter >= 4) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = `translateX(0)`;
      clickCounter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .navbar, .navbar-container, .sidebar, .sidebar-icon, .movie-list-title, .toggle, .toggle-ball, .movie-list-item-title, .movie-list-item-desc, .movie-list-item-button, .featured-button"
);

ball.addEventListener("click", () => {
  console.log("click");
  items.forEach((item) => {
    console.log("items");
    item.classList.toggle("active");
  });
});
