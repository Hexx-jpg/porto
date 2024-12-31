// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the target section
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth',
        });
    });
});

// Modal Functionality for Image Display
const projectImages = document.querySelectorAll('.project-card img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
        caption.textContent = image.alt; // Menampilkan teks alt dari gambar
    });
});

// Close the modal
function closeModal() {
    modal.style.display = 'none';
}