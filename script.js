document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const image = card.getAttribute('data-image');
        if (image) {
            card.style.setProperty('--background-image', `url(${image})`);
        }
    });
});