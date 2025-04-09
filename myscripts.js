// This is where you can add interactive functionality
document.addEventListener('DOMContentLoaded', function() {
  // Example: Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Example: Dynamic year in footer
  const yearSpan = document.createElement('span');
  yearSpan.textContent = new Date().getFullYear();
  document.querySelector('footer').appendChild(document.createTextNode(' © '));
  document.querySelector('footer').appendChild(yearSpan);

  // You can add more interactive features here
  console.log('Portfolio loaded successfully!');
});