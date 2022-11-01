export function openBurgerMenu() {
    let openMenu = document.querySelector(".menu-burger-icon");
    let closeMenu = document.querySelector(".burger-close");
    let burgerMenu = document.querySelector(".burger-menu");
    
  
  
    openMenu.addEventListener("click", () => {
        burgerMenu.classList.add("active");
    });
    closeMenu.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
    });
  }