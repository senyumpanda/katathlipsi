// Load Page
var loadPage = document.querySelector(".load-page");

// Menu
var menuPage = document.querySelector(".menu")

// Beranda
var berandaJudul = document.querySelector(".judul-beranda")
var berandaTeksBlink = document.querySelector(".teks-blink-beranda")
var berandaPenjelasan = document.querySelector(".penjelasan-beranda")
var berandaGambar = document.querySelector(".deskripsi-gambar-beranda")

window.addEventListener("load", () => {
    // Load Page
    loadPage.classList.toggle("animate-loadDisappear")
    // Menu 
    menuPage.classList.toggle("animate-menuShow")

    // ----- [ Beranda ] -----
    // Judul
    berandaJudul.classList.toggle("animate-berandaJudul")
    // Animasi Teks Judul
    setTimeout(() => {
        berandaTeksBlink.classList.toggle('relative')
        berandaTeksBlink.classList.toggle('before:content-[""]')
        berandaTeksBlink.classList.toggle('before:absolute')
        berandaTeksBlink.classList.toggle('before:top-0')
        berandaTeksBlink.classList.toggle('before:bottom-0')
        berandaTeksBlink.classList.toggle('before:left-0')
        berandaTeksBlink.classList.toggle('before:right-0')
        berandaTeksBlink.classList.toggle('after:absolute')
        berandaTeksBlink.classList.toggle('after:top-0')
        berandaTeksBlink.classList.toggle('after:bottom-0')
        berandaTeksBlink.classList.toggle('after:left-0')
        berandaTeksBlink.classList.toggle('after:right-0')
        berandaTeksBlink.classList.toggle('before:bg-white')
        berandaTeksBlink.classList.toggle('before:animate-typewriter')
        berandaTeksBlink.classList.toggle('after:w-[0.05em]')
        berandaTeksBlink.classList.toggle('after:bg-[#0AC0F7]')
        berandaTeksBlink.classList.toggle('after:animate-blink')
    }, 2000)
    // Penjelasan
    berandaPenjelasan.classList.toggle('animate-berandaPenjelasan')
    // Gambar
    berandaGambar.classList.toggle('animate-berandaGambar')
    
})