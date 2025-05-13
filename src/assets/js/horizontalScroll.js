import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

let matchMedia = gsap.matchMedia();

matchMedia.add("(min-width: 769px) and (max-width: 1199px)", () => {
   horizontalScroll(-110)
});
matchMedia.add("(min-width: 1200px)", () => {
   horizontalScroll(-95)
});

function horizontalScroll(xPercent) {
   const wrapper = document.querySelector('.js-horizontalScrollContainer');
   const items = document.querySelectorAll('.js-horizontalScrollItem');
   const wrapperWidth = wrapper.offsetWidth;
   gsap.registerPlugin(ScrollTrigger);
   gsap.to( items, {
      xPercent: xPercent * (items.length - 1),
      ease: "none",
      scrollTrigger: {
         trigger: wrapper,
         pin: true,
         scrub: true,
         end: () => "+=" + wrapperWidth,
         anticipatePin: 1,
         invalidateOnRefresh: true,
      }
   })
}