
// mobile menu toggle

document.querySelector('.site-toggle i').onclick = function (e) {
  var toggleDiv = document.querySelector('body');
  toggleDiv.classList.toggle('on');
}

document.querySelector('.nav-close').onclick = function (e) {
  var toggleDiv = document.querySelector('body');
  toggleDiv.classList.remove('on');
}


// custom parallax js

// Get all the elements to be parallaxed
const parallaxElements = document.querySelectorAll('.parallax')

// The parallax function
const parallax = elements => {
		if ('undefined' !== elements && elements.length > 0) {
			elements.forEach( element => {
				let y = window.innerHeight - element.getBoundingClientRect().top
				if (y > 0) {
					element.style.transform = 'translate3d(0, +' + (0.25 * y) + 'px ,0)'
				}
			})
		}
	}

//If element is in viewport, set its position
parallax(parallaxElements)

//Call the function on scroll
window.onscroll = () => {
		parallax(parallaxElements)
}



  // scroll animation js
    
  const mediaQuery = window.matchMedia('(min-width:100px)')
  // Check if the media query is true
  if (mediaQuery.matches) {
  
	  const scrollElements = document.querySelectorAll(".site-scroll");
  
  const elementInView = (el, dividend = 1) => {
	const elementTop = el.getBoundingClientRect().top;
  
	return (
	  elementTop <=
	  (window.innerHeight || document.documentElement.clientHeight) / dividend
	);
  };
  
  const elementOutofView = (el) => {
	const elementTop = el.getBoundingClientRect().top;
  
	return (
	  elementTop > (window.innerHeight || document.documentElement.clientHeight)
	);
  };
  
  const displayScrollElement = (element) => {
	element.classList.add("scrolled");
  };
  
  const hideScrollElement = (element) => {
	element.classList.remove("scrolled");
  };
  
  const handleScrollAnimation = () => {
	scrollElements.forEach((el) => {
	  if (elementInView(el, 1.25)) {
		displayScrollElement(el);
	  } else if (elementOutofView(el)) {
		hideScrollElement(el)
	  }
	})
  }
  
  window.addEventListener("scroll", () => { 
	handleScrollAnimation();
  });
}



// custom individual scoll timing
	setTimeout(() => document.querySelector('.site-header').classList.add('show'), 200);
	setTimeout(() => document.querySelector('.hero-slider').classList.add('show'), 100);



  if(document.querySelector('.inner-hero') !== null) {
	setTimeout(() => document.querySelector('.inner-hero').classList.add('show'), 500);
  }

	setTimeout(() => document.querySelector('.hero-slider .hero-content h2').classList.add('show'), 700);
	setTimeout(() => document.querySelector('.hero-slider .hero-content p').classList.add('show'), 800);
	setTimeout(() => document.querySelector('.hero-slider .hero-content .anchor-div').classList.add('show'), 900);


