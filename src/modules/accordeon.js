const accordeon = () => {
  const accordeon = document.querySelector(".accordeon");
  const elements = accordeon.querySelectorAll(".element");
  const elemContent = accordeon.querySelectorAll(".element>.element-content");
  // открытие акардеона при нажатии
  accordeon.addEventListener("click", (event) => {
    let target = event.target;
    if (target.closest(".element")) {
      const clickElement = target.closest(".element");
      elements.forEach((elemnt, index) => {
        if (elemnt === clickElement) {
          elemnt.classList.add("active");
          elemContent[index].style.display = "block";
        } else {
          elemnt.classList.remove("active");
          elemContent[index].style.display = "none";
        }
      });
    }
  });
};

export default accordeon;
