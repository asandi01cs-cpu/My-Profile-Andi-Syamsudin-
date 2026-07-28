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
// EFEK KETIK SAPAAN DI NAVBAR (OTOMATIS HILANG)
// =========================================

// Teks ini disesuaikan dengan visi Anda untuk saling berbagi
const textToType = "Selamat datang! Mari terhubung dan berbagi kebaikan sesama pemula."; 
const typingElement = document.getElementById("typing-greeting");
const greetingOverlay = document.getElementById("greeting-overlay");
let charIndex = 0;

function typeWriter() {
    if (typingElement && charIndex < textToType.length) {
        typingElement.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); // Kecepatan mengetik (50ms)
    } else if (charIndex === textToType.length) {
        // Teks selesai diketik! Tunggu 2.5 detik agar sempat dibaca...
        setTimeout(() => {
            if(greetingOverlay) {
                // Beri efek pudar
                greetingOverlay.classList.add("fade-out");
                
                // Setelah memudar selama 1 detik, hapus elemen secara total agar Navbar normal kembali
                setTimeout(() => {
                    greetingOverlay.style.display = "none";
                }, 1000);
            }
        }, 2500); // 2500 ms = 2.5 detik
    }
}

// Jalankan efek sesaat setelah halaman web terbuka
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeWriter, 500);
});
