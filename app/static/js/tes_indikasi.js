// Load Page
var loadPage = document.querySelector(".load-page");

// Menu
var menuPage = document.querySelector(".menu")

// Tes Indikasi
var tesIndikasiJudul = document.querySelector(".judul-tes-indikasi")
var tesIndikasiKetTambahan = document.querySelector(".keterangan-tambahan-judul-tes-indikasi")
var tesIndikasiTombol = document.querySelector(".tombol-mulai-tes-indikasi")
var tesIndikasiJudulPanduan = document.querySelector(".judul-panduan-tes-indikasi")
var tesIndikasiPoinPanduan = document.querySelector(".poin-panduan-test-indikasi")
var tesIndikasiNotePanduan = document.querySelector(".note-panduan-tes-indikasi")

window.addEventListener("load", () => {
    // Load Page
    loadPage.classList.toggle("animate-loadDisappear")
    // Menu 
    menuPage.classList.toggle("animate-menuShow")

    // ----- [ Tes Indikasi ] -----
    // Judul
    tesIndikasiJudul.classList.toggle('animate-tesIndikasiJudul')
    // Keterangan Tambahan Judul
    tesIndikasiKetTambahan.classList.toggle('animate-tesIndikasiKetTambahan')
    // Tombol
    tesIndikasiTombol.classList.toggle('animate-tesIndikasiTombol')
    // Judul Panduan
    tesIndikasiJudulPanduan.classList.toggle('animate-tesIndikasiJudulPanduan')
    // Poin Panduan
    tesIndikasiPoinPanduan.classList.toggle('animate-tesIndikasiPoinPanduan')
    // Note Panduan
    tesIndikasiNotePanduan.classList.toggle('animate-tesIndikasiNotePanduan')
    
})