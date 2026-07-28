const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#ffffff';
        navLinks.style.padding = '1.5rem';
        navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
});

// =========================================
// EFEK KETIK (TYPING EFFECT) UNTUK SAPAAN
// =========================================

const textToType = "Halo! Selamat Datang di Profil Profesional Saya 👋";
const typingElement = document.getElementById("typing-greeting");
let charIndex = 0;

function typeWriter() {
    // Pastikan elemen ditemukan di halaman
    if (typingElement && charIndex < textToType.length) {
        typingElement.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 80); // Angka 80 adalah kecepatan mengetik (ms)
    }
}

// Jalankan efek ketik saat halaman pertama kali dibuka
document.addEventListener("DOMContentLoaded", function() {
    // Beri sedikit jeda sebelum mulai mengetik agar lebih natural
    setTimeout(typeWriter, 500);
});
