import * as flsFunctions from "./modules/functions.js";
import * as myFunctions from "./modules/main.js";
import * as bannerSlider from "./modules/banner-slider.js";
import * as autoSlider from "./modules/auto-page-slider.js";
import * as closeTop from "./modules/close-top-banner.js";
import * as burgerMenu from "./modules/burger.js"


burgerMenu.openBurgerMenu()
bannerSlider.addBannerSlider();
flsFunctions.isWebp();
myFunctions.addMainScript();
autoSlider.addAutoSlider();
closeTop.closeTopBanner();

