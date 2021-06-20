import { addClass, removeClass } from './utils-class';
$(document).scroll(function() {
var y = $(window).scrollTop();
let textNav = document.querySelectorAll('#nav-text');
    if (y >= 650 ) {
        $("#navbar").addClass("shActive");
        $("#navbar").addClass("text-black-primary");
        $("#navbar").removeClass("text-white");
        
    }else {

        $("#navbar").removeClass("shActive");
        $("#navbar").removeClass("text-black-primary");
        $("#navbar").addClass("text-white");
    }
});