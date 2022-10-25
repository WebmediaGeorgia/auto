import $ from "jquery";
import "slick-carousel";

export function addBannerSlider() {


$(".slider").slick({
    dots:true,
});
$(".little_slider").slick({
    dots:true,
    arrows:false,
});
}