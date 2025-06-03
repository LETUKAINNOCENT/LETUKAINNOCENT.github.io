document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  const typingElement = document.getElementById('typing');
  const words = [
    "Web Developer",
    "Developer",
    "Web Designer",
    "Mobile Developer",
    "Computer Scientist"
  ];
  
  
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    let displayText;

    if (isDeleting) {
      letterIndex--;
      displayText = currentWord.substring(0, letterIndex);
    } else {
      letterIndex++;
      displayText = currentWord.substring(0, letterIndex);
    }

    typingElement.innerHTML = displayText;

    let typeSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && letterIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});
