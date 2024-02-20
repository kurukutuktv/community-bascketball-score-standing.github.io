// SCROLL EFFECT IN SECTION WHEN ACTIVE
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  function addActiveClass() {
    const scrollPosition = window.pageYOffset;
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
  
  addActiveClass();
  
  window.addEventListener('scroll', addActiveClass);
});
