document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector(".ergonomic__img-up");
  const buttonUp = document.querySelector("#buttonUp");
  const buttonDown = document.querySelector("#buttonDown");

  buttonUp.addEventListener("click", (event) => {
    event.preventDefault();
    table.style.bottom = "0px";
    table.style.transition = "1s";
  });
  buttonDown.addEventListener("click", (event) => {
    event.preventDefault();
    table.style.bottom = "-80px";
    table.style.transition = "1s";
  });
});
