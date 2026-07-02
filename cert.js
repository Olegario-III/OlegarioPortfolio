// cert.js

// horizontal mouse-wheel scrolling
const cimg = document.querySelector('.cimg');
if (cimg) {
    cimg.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            cimg.scrollLeft += e.deltaY;
        }
    });
}

// click-to-enlarge modal
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('certModalImg');
const modalClose = document.getElementById('certModalClose');

document.querySelectorAll('.certificate').forEach((img) => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.classList.add('active');
    });
});

function closeModal() {
    modal.classList.remove('active');
    modalImg.src = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(); // click outside image closes it
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});