

let loader = document.getElementById("loader");
let menubar = document.getElementById("menubar");
let n3 = document.getElementById("n3")
let close = document.getElementById("close")
const ticker = document.querySelector('.ticker');



let cn = 0;
let i = setInterval(() => {
  if (cn < 100) {
    cn++;
    loader.textContent = cn + "%";
  } else {
    clearInterval(i);
  }
}, 30);

ticker.addEventListener('mouseover', () => {
  document.querySelectorAll('.ticker-content').forEach(content => {
    content.style.animationPlayState = 'paused';
  });
});

ticker.addEventListener('mouseout', () => {
  document.querySelectorAll('.ticker-content').forEach(content => {
    content.style.animationPlayState = 'running';
  });
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
  duration: 2

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
