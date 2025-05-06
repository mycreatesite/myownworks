import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const wrapper = document.querySelector('.js-horizontalScrollContainer');
const items = document.querySelectorAll('.js-horizontalScrollItem');
const wrapperWidth = wrapper.offsetWidth;
gsap.registerPlugin(ScrollTrigger);
gsap.to( items, {
   xPercent: -100 * (items.length - 1.25),
   ease: "none",
   scrollTrigger: {
      trigger: wrapper,
      pin: true,
      scrub: 1,
      end: () => "+=" + wrapperWidth,
      anticipatePin: 1,
      invalidateOnRefresh: true,
  }
})