/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


/****************************************/
/*         INDEX                        */
/*=======================================
 *     01.  Tobii lightbox              *
 *     02.  Gallery filter js           *
 *     03.  Tiny Slider                 *
 *     04.  Contact Form                *
 *     05.  Typed Text animation        *
 *     06.  Mouse Move Animation        *
 *     07.  Data Counter                *
 *     08.  WoW JS                      *
 *     09.  Particles                   *
 *     10.  Menu                        *
 *     11.  Cursor                      *
 ======================================*/

//=========================================//
/*              01) Tobii lightbox         */
//=========================================//

try {
  const tobii = new tobii();
} catch (err) {}

//=========================================//
/*             02) Gallery filter js      */
//=========================================//

try {
  var Shuffle = window.Shuffle;

  class Demo {
    constructor(element) {
      if (element) {
        this.element = element;
        this.shuffle = new Shuffle(element, {
          itemSelector: ".picture-item",
          sizer: element.querySelector(".my-sizer-element"),
        });

        // Log events.
        this.addShuffleEventListeners();
        this._activeFilters = [];
        this.addFilterButtons();
      }
    }

    /**
     * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
     * for them like you normally would (with jQuery for example).
     */
    addShuffleEventListeners() {
      this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
        console.log("layout. data:", data);
      });
      this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
        console.log("removed. data:", data);
      });
    }

    addFilterButtons() {
      const options = document.querySelector(".filter-options");
      if (!options) {
        return;
      }

      const filterButtons = Array.from(options.children);
      const onClick = this._handleFilterClick.bind(this);
      filterButtons.forEach((button) => {
        button.addEventListener("click", onClick, false);
      });
    }

    _handleFilterClick(evt) {
      const btn = evt.currentTarget;
      const isActive = btn.classList.contains("active");
      const btnGroup = btn.getAttribute("data-group");

      this._removeActiveClassFromChildren(btn.parentNode);

      let filterGroup;
      if (isActive) {
        btn.classList.remove("active");
        filterGroup = Shuffle.ALL_ITEMS;
      } else {
        btn.classList.add("active");
        filterGroup = btnGroup;
      }

      this.shuffle.filter(filterGroup);
    }

    _removeActiveClassFromChildren(parent) {
      const { children } = parent;
      for (let i = children.length - 1; i >= 0; i--) {
        children[i].classList.remove("active");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.demo = new Demo(document.getElementById("grid"));
  });
} catch (err) {}

//=========================================//
/*             03) Tiny Slider            */
//=========================================//

if (document.getElementsByClassName("tiny-single-item").length > 0) {
  var slider = tns({
    container: ".tiny-single-item",
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
  });
}

//=========================================//
/*             04) Contact Form           */
//=========================================//

// Contact Form
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var subject = document.forms["myForm"]["subject"].value;
  var comments = document.forms["myForm"]["comments"].value;
  document.getElementById("error-msg").style.opacity = 0;
  document.getElementById("error-msg").innerHTML = "";
  if (name == "" || name == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
    fadeIn();
    return false;
  }
  if (email == "" || email == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
    fadeIn();
    return false;
  }
  if (subject == "" || subject == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
    fadeIn();
    return false;
  }
  if (comments == "" || comments == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";
    fadeIn();
    return false;
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("simple-msg").innerHTML = this.responseText;
      document.forms["myForm"]["name"].value = "";
      document.forms["myForm"]["email"].value = "";
      document.forms["myForm"]["subject"].value = "";
      document.forms["myForm"]["comments"].value = "";
    }
  };
  xhttp.open("POST", "php/contact.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "name=" +
      name +
      "&email=" +
      email +
      "&subject=" +
      subject +
      "&comments=" +
      comments
  );
  return false;
}

function fadeIn() {
  var fade = document.getElementById("error-msg");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.5;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}

//=========================================//
/*   05) Typed Text animation (animation) */
//=========================================//

try {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };

  function typewrite() {
    if (toRotate === "undefined") {
      changeText();
    } else var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".typewrite > .wrap { border-right: 0.08em solid transparent}";
    document.body.appendChild(css);
  }
  window.onload(typewrite());
} catch (err) {}

//=========================================//
/*/*       06) Mouse Move Animation       */
//=========================================//

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 50;
    const y = (window.innerHeight - e.pageY * speed) / 50;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

//=========================================//
/*/*          07)  Data Counter           */
//=========================================//

try {
  const counter = document.querySelectorAll(".counter-value");
  const speed = 900; // The lower the slower

  counter.forEach((counter_value) => {
    const updateCount = () => {
      const target = +counter_value.getAttribute("data-target");
      const count = +counter_value.innerText;

      // Lower inc to slow and higher to slow
      var inc = target / speed;

      if (inc < 1) {
        inc = 1;
      }

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter_value
        counter_value.innerText = (count + inc).toFixed(0);
        // Call function every ms
        setTimeout(updateCount, 1);
      } else {
        counter_value.innerText = target;
      }
    };

    updateCount();
  });
} catch (err) {}
//=========================================//
/*              08) WoW JS                 */
//=========================================//
try {
  new WOW().init();
} catch (error) {}

//=========================================//
/*              09) Particles             */
//=========================================//

try {
  particlesJS("particles-snow", {
    particles: {
      number: {
        value: 250,
        density: {
          enable: false,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 36,
        },
        image: {
          src: "",
          width: 1000,
          height: 1000,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 0.5,
          opacity_min: 1,
          sync: false,
        },
      },
      size: {
        value: 3.2,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 800,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 71,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
} catch (error) {}

//=========================================//
/*                 09) Menu               */
//=========================================//

window.addEventListener("load", fn, false);

//  window.onload = function loader() {
function fn() {
  // Preloader
  if (document.getElementById("preloader")) {
    setTimeout(() => {
      document.getElementById("preloader").style.visibility = "hidden";
      document.getElementById("preloader").style.opacity = "0";
    }, 350);
  }
}
//Menu
function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}
window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});
// Toggle menu
function toggleMenu() {
  document.getElementById("isToggle").classList.toggle("open");
  var isOpen = document.getElementById("navbar");
  if (isOpen.style.display === "block") {
    isOpen.style.display = "none";
  } else {
    isOpen.style.display = "block";
  }
}

// back-to-top
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (mybutton != null) {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// //Feather icon
feather.replace();

//Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Navbar Active Class
var spy = new Gumshoe("#navbar-navlist a", {
  // Active classes
  // navClass: 'active', // applied to the nav list item
  // contentClass: 'active', // applied to the content
  offset: 80,
});

//=========================================//
/*               10) Cursor               */
//=========================================//

// set the starting position of the cursor outside of the screen
let clientX = 100;
let clientY = 100;
const innerCursor = document.querySelector(".cursor-small");

const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    // if you are already using TweenMax in your project, you might as well
    // use TweenMax.set() instead
    // TweenMax.set(innerCursor, {
    //   x: clientX,
    //   y: clientY
    // });

    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();

let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
  const canvas = document.querySelector(".cursor-canvas");
  const shapeBounds = {
    width: 75,
    height: 75,
  };
  paper.setup(canvas);
  const strokeColor = "rgba(0, 0, 0, 0.5)";
  const strokeWidth = 1;
  const segments = 8;
  const radius = 20;

  // we'll need these later for the noisy circle
  const noiseScale = 150; // speed
  const noiseRange = 4; // range of distortion
  let isNoisy = false; // state

  // the base shape for the noisy circle
  const polygon = new paper.Path.RegularPolygon(
    new paper.Point(0, 0),
    segments,
    radius
  );
  polygon.strokeColor = strokeColor;
  polygon.strokeWidth = strokeWidth;
  polygon.smooth();
  group = new paper.Group([polygon]);
  group.applyMatrix = false;

  const noiseObjects = polygon.segments.map(() => new SimplexNoise());
  let bigCoordinates = [];

  // function for linear interpolation of values
  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  // function to map a value from one range to another range
  const map = (value, in_min, in_max, out_min, out_max) => {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  // the draw loop of Paper.js
  // (60fps with requestAnimationFrame under the hood)
   
  paper.view.onFrame = (event) => {
    // using linear interpolation, the circle will move 0.2 (20%)
    // of the distance between its current position and the mouse
    // coordinates per Frame
    lastX = lerp(lastX, clientX, 0.2);
    lastY = lerp(lastY, clientY, 0.2);
     
    group.position = new paper.Point(lastX, lastY);
  };
};

initCanvas();
