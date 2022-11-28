/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["templates/*.html", "static/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'hack': ['Hack', 'Poppins', 'sans-serif']
      },
      boxShadow: {
        'blue-profil': '0 0 55px 2px #0AC0F7',
      },
      animation: {
        load: 'load-key 1s forwards cubic-bezier(0, 0, 0, 0)',
        loadDisappear: 'load-disappear-key 1s forwards 1s',
        typewriter: 'typewriter-key 7s steps(12) 1s infinite',
        blink: 'typewriter-key 7s steps(12) 1s infinite, blink-key 750ms steps(12) infinite',
        menuShow: 'menu-show-key 2s ease-in-out',
        berandaJudul: 'beranda-judul-key 2.2s ease-in-out',
        berandaPenjelasan: 'beranda-penjelasan-key 2.3s ease-in-out',
        berandaGambar: 'beranda-gambar-key 2.5s ease-in-out',
        tesIndikasiJudul: 'tes-indikasi-judul-key 2.8s ease-in-out',
        tesIndikasiKetTambahan: 'tes-indikasi-ket-tambahan-key 3s ease-in-out',
        tesIndikasiTombol: 'tes-indikasi-tombol-key 3.5s ease-in-out',
        tesIndikasiJudulPanduan: 'tes-indikasi-judul-panduan-key 3.2s ease-in-out',
        tesIndikasiPoinPanduan: 'tes-indikasi-poin-panduan-key 3.3s ease-in-out',
        tesIndikasiNotePanduan: 'tes-indikasi-note-panduan-key 3.4s ease-in-out',
        kelJudul: 'kel-judul-key 2.8s ease-in-out',
        kelKetTambahan: 'kel-ket-tambahan-key 2.9s ease-in-out',
        kelGambar: 'kel-gambar-key 4s ease-in-out',
        kelTeks: 'kel-teks-key 4.1s ease-in-out'
      },
      keyframes:  {
        'load-key': {
          '0%': {width: '0%'},
          '100%': {width: '100%'}
        },
        'load-disappear-key': {
          '100%': {opacity:'0', visibility: 'hidden'}
        },
        'typewriter-key': {
          'to': {left: '100%'}
        },
        'blink-key' : {
          'to': {background:'transparent'}
        },
        'menu-show-key': {
          '0%': {transform: 'translateX(-100%) scale(0)'},
          '100%': {transform: 'translateX(0) scale(1)'}
        },
        'beranda-judul-key': {
          '0%': {transform: 'translateY(-200%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        'beranda-penjelasan-key': {
          '0%': {transform: 'translateX(200%)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity:  '1'}
        },
        'beranda-gambar-key': {
          '0%': {transform: 'translateY(200%) scale(0)'},
          '100%': {transform: 'translateY(0) scale(1)'}
        },
        'tes-indikasi-judul-key': {
          '0%': {transform: 'translateY(-200%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        'tes-indikasi-ket-tambahan-key': {
          '0%': {transform: 'translateY(-200%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        'tes-indikasi-tombol-key': {
          '0%': {transform: 'scale(0)', opacity: '0'},
          '100%': {transform: 'scale(1)', opacity: '1'}
        },
        'tes-indikasi-judul-panduan-key': {
          '0%': {transform: 'scale(0)', opacity: '0'},
          '100%': {transform: 'scale(1)', opacity: '1'}
        },
        'tes-indikasi-poin-panduan-key': {
          '0%': {transform: 'translateX(200%)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'}
        },
        'tes-indikasi-note-panduan-key': {
          '0%': {transform: 'translateX(200%)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'}
        },
        'kel-judul-key': {
          '0%': {transform: 'translateY(-200%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        'kel-ket-tambahan-key': {
          '0%': {transform: 'scale(0)', opacity: '0'},
          '100%': {transform: 'scale(1)', opacity: '1'}
        },
        'kel-gambar-key': {
          '0%': {width: '220px', transform: 'translateX(200%) scale(0)', opacity: '0'},
          '100%': {width: '220px',transform: 'translateX(0) scale(1)', opacity: '1'}
        },
        'kel-teks-key': {
          '0%': {transform: 'translateX(200%) scale(0)', opacity:'0'},
          '100%': {transform: 'translateX(0) scale(1)', opacity:'1'}
        }
      }
    },
  },
  plugins: [],
}
