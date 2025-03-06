// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// init Swiper:
const swiper = new Swiper('.myswiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
let menubar = document.getElementById("menubar");
let n3 = document.getElementById("n3")
let close = document.getElementById("close")

n3.addEventListener("click", function () {
    gsap.to(menubar, {
      right: 0,
      duration: 0.5,
      ease: "power2.out"
    })
  })
  close.addEventListener("click", function () {
    gsap.to(menubar, {
      right: "-100%",
      duration: 0.5
    })
  })
function changewf() {
    window.location.href = '/web-forge'
  }
  
  function changea() {
    window.location.href = '/about'
  }
  
  function changecu() {
    window.location.href = '/contact'
  }
  function changem() {
    window.location.href = '/menu'
  }
  
  function refresh() {
    window.location.href = '/'
  }
  
