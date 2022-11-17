// Load Page
var loadPage = document.querySelector(".load-page");

// Menu
var menuPage = document.querySelector(".menu")

// Group
var kelJudul = document.querySelector(".judul-anggotaKelompok h1")
var kelKetTambahan = document.querySelector(".keterangan-tambahan-judul-anggotaKelompok")
var kelGambar = document.querySelectorAll(".gambar-anggotaKelompok img")
var kelTeks = document.querySelectorAll(".informasi-anggotaKelompok h3")

window.addEventListener("load", () => {
    // Load Page
    loadPage.classList.toggle("animate-loadDisappear")
    // Menu 
    menuPage.classList.toggle("animate-menuShow")

    // ----- [ Group ] -----
    // Judul
    kelJudul.classList.toggle('animate-kelJudul')
    // Keterangan Tambahan Judul
    kelKetTambahan.classList.toggle('animate-kelKetTambahan')
    // Gambar
    for(var i = 0; i < kelGambar.length; i++) {
        kelGambar[i].classList.toggle('animate-kelGambar')
    }
    // Teks Gambar
    for(var i = 0; i < kelTeks.length; i++) {
        kelTeks[i].classList.toggle('animate-kelTeks')
    }
    
})