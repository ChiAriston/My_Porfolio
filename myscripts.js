// This is where you can add interactive functionality
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for anchor links using event delegation
  document.body.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(e.target.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });

  // Dynamic year in footer
  const footer = document.querySelector('footer');
  if (footer) {
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    footer.appendChild(document.createTextNode(' © '));
    footer.appendChild(yearSpan);
  }

  // Additional interactive features can be added here
  // console.log('Portfolio loaded successfully!');
});