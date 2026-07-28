// =========================================
// MENU NAVIGASI HP (Garis Tiga / Hamburger)
// =========================================

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Fungsi untuk memunculkan/menyembunyikan menu saat diklik di HP
if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Tutup menu otomatis jika salah satu link diklik (di versi HP)
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
