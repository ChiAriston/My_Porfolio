function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Target element not found:', this.getAttribute('href'));
            }
        });
    });
}

function addDynamicFooterYear() {
    const footer = document.querySelector('footer');
    footer.innerHTML += ` © ${new Date().getFullYear()}`;
}

document.addEventListener('DOMContentLoaded', function() {
    enableSmoothScroll();
    addDynamicFooterYear();
    console.log('Portfolio loaded successfully!');
});
