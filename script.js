document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  const typingElement = document.getElementById('typing');
  const words = ["Physicist", "Computer Scientist", "Web Developer", "Researcher"];
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = words[wordIndex];
  let isDeleting = false;

  function type() {
    const displayText = isDeleting
      ? currentWord.substring(0, letterIndex--)
      : currentWord.substring(0, letterIndex++);

    typingElement.innerHTML = displayText;

    if (!isDeleting && letterIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      currentWord = words[wordIndex];
    }

    setTimeout(type, isDeleting ? 100 : 150);
  }

  type();
});
