export function closeTopBanner() {
  let topBanner = document.querySelector(".header .header__top");
  let closeTop = document.querySelector(".item.close");
  let main = document.querySelector('main');

  closeTop.addEventListener("click", () => {
    topBanner.classList.add("close-banner");
    main.style.marginTop = '5.365vw'


  });
}
