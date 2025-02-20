let blob = document.querySelector("#blob");
let web = document.getElementById("web");
let menu = document.getElementById("menu");
let loader = document.getElementById("loader");
let close = document.getElementById("close")

let cn = 0;
let i = setInterval(() => {
  if (cn < 100) {
    cn++;
    loader.textContent = cn + "%";
  } else {
    clearInterval(i);
  }
}, 30);

blob.addEventListener("mouseenter", function () {
  gsap.to(blob, {
    width: "360px",
    height: "60px",
    marginTop: "33px",
    marginBottom: "9px",
  });
});
blob.addEventListener("mouseleave", function () {
  gsap.to(blob, {
    width: "300px",
    height: "80px",
    marginTop: "20px",
    marginBottom: "0px",
  });
});
blob.addEventListener("click", function () {
  gsap.to("#menu", {
    height: "100vh",
    ease: "power2.out",
    duration: 1,
  });
});

web.addEventListener("click",function(){
  window.location.href="/web-forge"
})

close.addEventListener("click",function(){
  gsap.to("#menu", {
    height: 0,
    ease: "power2.out",
    duration: 1,
  });
})
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let tl = gsap.timeline();

tl.to(".boundingelem", {
  delay: 3.5,
  ease: "power2.out",
  y: "-100%",
});
tl.to("#fake", {
  height: 0,
  ease: "power2",
  duration: 0.1,
});
tl.to("#pg1", {
  height: "100%",
  width: "100%",
  ease: "power2",
  duration: 0.1,
});
tl.to("#pg1 #og1", {
  width: "70%",
  height: "5%",
  borderRadius: "10px",
  ease: "power2",
  duration: 2,
});
tl.to("#pg1 #og1", {
  delay: -1,
  width: "100%",
  height: "100%",
  borderRadius: 0,
  ease: "power2",
  duration: 1.5,
});
tl.to(".reveal", {
  y: 0,
  duration: 1,
  stagger: 0.1,
});
