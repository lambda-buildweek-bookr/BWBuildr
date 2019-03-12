const toggleNav = () => {
    nav.classList.toggle('nav--open');
  };
  
  const nav = document.querySelector('.nav');
  const navButton = document.querySelector('.buttona');
  navButton.addEventListener('click', toggleNav);
  