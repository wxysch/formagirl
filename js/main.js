let btn = document.querySelector(".menu__btn");

const burgerFunc = (
  menuClassName,
  showClassName,
  btnClassName,
  btnToggleClass
) => {
  let menu = document.querySelector(`.${menuClassName}`);
  let btn = document.querySelector(`.${btnClassName}`);

  if (menu.classList.contains(showClassName)) {
    menu.classList.remove(showClassName);
    btn.classList.remove(btnToggleClass);
  } else {
    menu.classList.add(showClassName);
    btn.classList.add(btnToggleClass);
  }
};

btn.addEventListener("click", () => {
  burgerFunc("nav", "active", "menu__btn", "active-btn");
});
