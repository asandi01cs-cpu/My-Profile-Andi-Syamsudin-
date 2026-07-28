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
// EFEK KETIK SAPAAN NAVBAR (DENGAN PENGAMAN)
// =========================================

const textToType = "Selamat datang! Mari terhubung dan berbagi kebaikan sesama pemula."; 
const typingElement = document.getElementById("typing-greeting");
const greetingOverlay = document.getElementById("greeting-overlay");
let charIndex = 0;
let sudahHilang = false; // Sistem penanda agar tidak terjadi eror ganda

// Fungsi untuk menghilangkan layar hitam sapaan
function hilangkanSapaan() {
    if (greetingOverlay && !sudahHilang) {
        sudahHilang = true;
        greetingOverlay.classList.add("fade-out"); // Efek pudar
        
        // Hapus total dari layar setelah 1 detik memudar
        setTimeout(() => {
            greetingOverlay.style.display = "none";
        }, 1000);
    }
}

// Fungsi efek mesin tik
function typeWriter() {
    if (typingElement && charIndex < textToType.length) {
        typingElement.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); // Kecepatan ketik
    } else if (charIndex === textToType.length) {
        // Jika tulisan sudah selesai, tunggu 2.5 detik lalu hilangkan
        setTimeout(hilangkanSapaan, 2500); 
    }
}

// Jalankan saat web dibuka
document.addEventListener("DOMContentLoaded", function() {
    // Mulai mengetik setelah jeda 0.5 detik
    setTimeout(typeWriter, 500);
    
    // SISTEM PENGAMAN: Paksa hilang setelah 8 detik (jika terjadi error/macet)
    setTimeout(hilangkanSapaan, 8000);
});
