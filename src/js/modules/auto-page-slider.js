import $ from "jquery";
import "slick-carousel";

export function addAutoSlider() {


$(".auto-card-slider").slick({
    dots:false,
    arrows:false,
    asNavFor:".auto-card-slider-little",
    
});

$(".auto-card-slider-little").slick({
    dots:false,
    arrows:true,
    slidesToShow:5,
    asNavFor:".auto-card-slider",
});


$(".slider-otzyvy").slick({
    dots:true,
    arrows:true,
});
}