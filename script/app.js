/* navigation animation start */

const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.menu');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('menu--open');
});
/* navigation end */

/* trusted section counting animation */
const counters = document.querySelectorAll('.counter');

let animationStarted = false;

function startCountingAnimation() {
  if (animationStarted) {
    return;
  }

  animationStarted = true;

  counters.forEach((counter) => {
    let initialCount = 0;
    const finalCount = parseInt(counter.getAttribute('data-count'));
    const countingInterval = 50; // Adjust the interval for smoother animation
    const increment = Math.ceil(finalCount / (1000 / countingInterval));

    const counting = setInterval(() => {
      initialCount += increment;
      if (initialCount > finalCount) {
        clearInterval(counting);
        initialCount = finalCount;
      }
      counter.textContent = formatCount(initialCount);
    }, countingInterval);
  });
}

function formatCount(count) {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(2) + 'M+';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K+';
  } else {
    return count;
  }
}

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const triggerPosition = document.querySelector(
    '.counting-container'
  ).offsetTop;

  if (scrollPosition > triggerPosition) {
    startCountingAnimation();
  }
});

/* REVEAL EFFECT START */
const revealElements = document.querySelectorAll('.reveal');

function checkScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', checkScroll);
/* REVEAL EFFECT END */



