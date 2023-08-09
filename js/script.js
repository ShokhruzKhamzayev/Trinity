'use strict'

ScrollReveal({
    reset: false,
    distance: "60px",
    duration: 2500,
    delay: 100,
  });

  ScrollReveal().reveal("header", { delay: 100, origin: "top" });
  ScrollReveal().reveal(".animated-links", { delay: 400, origin: "bottom", interval: 200 });
  ScrollReveal().reveal(".anim-car", { delay: 100, origin: "bottom", interval: 300 });
  ScrollReveal().reveal(".about-us", { delay: 100, origin: "top"});
  ScrollReveal().reveal(".pic-author", { delay: 300, origin: "bottom"});
  ScrollReveal().reveal(".advantage", { delay: 200, origin: "top", interval: 200});
  ScrollReveal().reveal(".left-ask", { delay: 200, origin: "top"});
  ScrollReveal().reveal(".inputs-place", { delay: 200, origin: "bottom"});
  ScrollReveal().reveal(".off-place", { delay: 200, origin: "bottom"});
  ScrollReveal().reveal("footer", { delay: 200, origin: "top"});
  ScrollReveal().reveal(".animated-cash", { delay: 200, origin: "left", interval: 200});
  ScrollReveal().reveal(".review", { delay: 200, origin: "left", interval: 200});



  let valueDisplays = document.querySelectorAll('.increase-anim'),
  interval = 10000;

valueDisplays.forEach((valueDisplay) => {
    let starValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function() {
        starValue += 1;
        valueDisplay.textContent = starValue
        if(starValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})


const navOpener = document.querySelector('.btnOpen'),
    navCloser = document.querySelector('.closerBtn'),
    leftScroller = document.querySelector('.scrollLeft'),
    rightScroller = document.querySelector('.scrollRight'),
    scrollAndClose = document.querySelectorAll('.nav-closer-scroller'),
    closerErrorPart = document.querySelector('.closerError'),
    carShow = document.querySelector('#car-show'),
    tabCars = document.querySelectorAll('.card-more'),
    carHide = document.querySelector('#car-hide')

navOpener.addEventListener('click', ()=> {
    document.querySelector('.navbar-menu-from-button').classList.add('activator-nav')
})

navCloser.addEventListener('click', ()=> {
    document.querySelector('.navbar-menu-from-button').classList.remove('activator-nav')
})

carShow.addEventListener('click', () => {
    tabCars.forEach(item => {
        if(item.classList.contains('hider-cars')) {
            item.classList.toggle('hider-cars')
        }
    })
    carShow.style.display = 'none'
    carHide.style.display = 'block'
})

carHide.addEventListener('click', ()=> {
    tabCars.forEach(item => {
        if(!item.classList.contains('hider-cars')) {
            item.classList.add('hider-cars')
        }
    })
    carShow.style.display = 'block'
    carHide.style.display = 'none'
})

leftScroller.addEventListener('click', ()=> {
    document.querySelector('.review-spinner').scrollLeft -= 300;
})

rightScroller.addEventListener('click', ()=> {
    document.querySelector('.review-spinner').scrollLeft += 320;
})

scrollAndClose.forEach(item => {
    item.addEventListener('click', ()=> {
        document.querySelector('.navbar-menu-from-button').classList.remove('activator-nav')
    })
})

scrollAndClose[1].addEventListener('click', ()=> {
    document.querySelector('.menu-for-nothing').classList.add('acivator-error');
})

closerErrorPart.addEventListener('click', ()=> {
    document.querySelector('.menu-for-nothing').classList.remove('acivator-error')
})

scrollAndClose[2].addEventListener('click', ()=> {
    document.querySelector('.menu-for-nothing').classList.add('acivator-error');
})

scrollAndClose[3].addEventListener('click', ()=> {
    document.querySelector('.menu-for-nothing').classList.add('acivator-error');
})

scrollAndClose[4].addEventListener('click', ()=> {
    document.querySelector('.menu-for-nothing').classList.add('acivator-error');
})

function Marquee(selector, speed) {
    const parent = document.querySelector(selector);
    const clone = parent.innerHTML;
    let i = 0;
    parent.innerHTML += clone;
  
    setInterval(() => {
      i += speed;
      if (i >= parent.children[0].clientWidth) i = 0;
      parent.children[0].style.marginLeft = `-${i}px`;
    }, 0);
  }
  
  window.addEventListener('load', () => Marquee('.spinner-links', .2));

