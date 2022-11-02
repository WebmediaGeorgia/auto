export function addAccordeon() {
  let buttonAcordeon = document.querySelectorAll(".complectation-auto .item");
  if (buttonAcordeon) {
    buttonAcordeon.forEach((element) => {
      element.addEventListener("click", (e) => {
        let list = element.querySelector(".item-list");
        if (e.target.tagName == "IMG") {
          list.classList.toggle("active");
          e.target.classList.toggle("active");
        }
      });
    });
  }
}
