//===== Prealoder

window.onload = function () {
  window.setTimeout(fadeout, 500);
};

document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    fadeout();
  } else {
    // console.error(".preloader element not found!");
  }
});

function fadeout() {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.display = "none";
  }
}


/*=====================================
Sticky
======================================= */
window.onscroll = function () {
  var header_navbar = document.querySelector(".navbar-area");
  var logo = document.querySelector(".navbar-brand img");
  var backToTo = document.querySelector(".scroll-top");

  if (header_navbar && logo && backToTo) {
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/img/logo/logo-2.svg";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/img/logo/logo.svg";
    }

    // show or hide the back-top-top button
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  }
};


// section menu active
function onScroll(event) {
  var sections = document.querySelectorAll('.page-scroll');
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  // Loop through all sections
  for (var i = 0; i < sections.length; i++) {
    var currLink = sections[i];
    var val = currLink.getAttribute('href');
    var refElement = document.querySelector(val);

    // Ensure refElement exists before accessing its properties
    if (refElement) {
      var scrollTopMinus = scrollPos + 73;  // Adjust the scroll position if needed
      if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
        // Remove 'active' from all other links
        document.querySelectorAll('.page-scroll').forEach(link => link.classList.remove('active'));

        // Add 'active' to the current link
        currLink.classList.add('active');
      } else {
        currLink.classList.remove('active');
      }
    }
  }
}

window.document.addEventListener("scroll", onScroll);

//===== close navbar-collapse when a  clicked
let navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");

document.querySelectorAll(".page-scroll").forEach((e) =>
  e.addEventListener("click", () => {
    navbarToggler.classList.remove("active");
    navbarCollapse.classList.remove("show");
  }),
);
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler) {
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
    });
  }
});


//====== counter up
var cu = new counterUp({
  start: 0,
  duration: 2000,
  intvalues: true,
  interval: 100,
  append: "K",
});
cu.start();

// WOW active
new WOW().init();
