export function closeTopBanner() {
  let topBanner = document.querySelector(".header .header__top");
  let closeTop = document.querySelector(".item.close");
  let main = document.querySelector("main");
  const mediaQuery = window.matchMedia("(max-width:1200px)");
  const mediaQueryTwo = window.matchMedia("(max-width:600px)");

  closeTop.addEventListener("click", () => {
    topBanner.classList.add("close-banner");
    if (mediaQuery.matches) {
      main.style.marginTop = "13.151vw";
    }
    if (mediaQueryTwo.matches) {
      main.style.marginTop = "22.133vw";
    } else {
      main.style.marginTop = "5.365vw";
    }
  });
}
