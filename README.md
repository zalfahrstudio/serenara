# Serenara — Ruang Musik Tenang

Website musik relaksasi responsif bergaya retro, klasik, dan alami. Dibuat dengan HTML, CSS, dan JavaScript murni.

## Fitur
- Kategori Piano & Lo-fi, Alam, Hujan, Air, dan Campuran.
- Daftar track, pencarian, favorit, acak, volume, kontrol play/pause dan seek visual.
- Ambient audio sintetis memakai Web Audio API: nada piano sederhana dan noise berfilter untuk membentuk ambience. Track ini merupakan **prototype generatif**, bukan rekaman asli.
- Latar visual dengan animasi CSS yang bergerak terus, visualizer, serta layout mobile/desktop.
- PWA: bisa dipasang ke home screen / dijadikan dasar APK melalui pembungkus Android WebView atau TWA.

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka `index.html` untuk preview. Browser modern diperlukan untuk audio.
3. Untuk instalasi PWA dan service worker, jalankan lewat HTTPS atau server lokal, misalnya:
   - `python -m http.server 8000`
   - buka `http://localhost:8000`
4. Di Android Chrome, buka situs yang sudah di-host HTTPS lalu pilih **Install app / Add to Home screen**.

## Catatan penting
- Audio dibuat secara generatif di browser sehingga belum sama dengan rekaman piano, hujan, sungai, atau alam sungguhan. Klik Putar untuk mengaktifkan audio karena browser membutuhkan interaksi pengguna.
- Foto latar memakai URL Unsplash dan membutuhkan internet. Ganti URL di `style.css` jika ingin memakai video loop milik sendiri.
- Untuk versi publik, tambahkan file audio/video berlisensi yang jelas dan atur atribusi sesuai lisensi. Jika ingin audio asli, letakkan berkas di folder `assets/` lalu ubah pemutar di `app.js` menjadi pemutaran elemen `<audio>`.


## Pembaruan: Sound Mixer dan ilustrasi PNG
- Gunakan tombol **＋** di samping trek untuk menambahkan suara itu sebagai lapisan tambahan. Sampai 4 lapisan dapat berjalan bersamaan (trek utama + 3 lapisan).
- Tombol **Reset lapisan** menghapus lapisan tambahan tanpa mengganti trek utama.
- Ilustrasi hero kini memakai `assets-hero.png`, bukan bentuk matahari/gunung yang dibangun dari CSS.
- Track bawaan tetap memakai sintesis Web Audio API. Kini kamu juga bisa menambahkan rekaman MP3 lokal melalui konfigurasi `customAudioTracks` di `app.js`. File audio memiliki loop, kategori, pencarian, favorit, mixer, dan slider volume independen.

## Mode video suasana (versi terbaru)
Empat mode waktu sekarang memakai video MP4 loop lokal, sehingga tidak membutuhkan koneksi ke situs video eksternal:
- `mode-sunrise.mp4` — cahaya hangat fajar
- `mode-day.mp4` — warna hijau kebiruan siang
- `mode-sunset.mp4` — warna jingga/merah senja
- `mode-night.mp4` — nuansa hijau gelap malam

Pilih tombol Sunrise, Siang, Sunset, atau Malam di bagian **Ikuti warna harimu**. Video otomatis berganti, diputar berulang, dan tanpa suara agar tidak mengganggu musik. Video dibuat sebagai animasi ilustrasi lanskap bergaya retro (bukan rekaman alam live/stock footage). Untuk hasil paling stabil, jalankan website melalui localhost atau hosting HTTPS.


## Volume tiap trek (versi v5)
- Setiap baris musik memiliki slider volume mandiri (0–100%).
- Slider mengatur gain audio untuk trek itu saja, tidak mengubah volume trek lain.
- Pengaturan volume per trek disimpan di browser agar tetap sama ketika halaman dibuka lagi.
- Slider volume utama di bagian bawah tetap menjadi master volume untuk seluruh campuran.
- Saat mencampur beberapa trek, atur volume masing-masing untuk menyeimbangkan musik dan ambience.


## Menambahkan rekaman MP3 lokal
1. Salin file MP3 ke folder `audio/` (folder ini sudah disediakan). Contoh `audio/hujan-di-teras.mp3`.
2. Buka `app.js`, cari bagian `customAudioTracks` di dekat awal file.
3. Salin salah satu contoh konfigurasi di sana, hilangkan tanda komentar `//` pada baris objek, lalu ubah `id`, `title`, `artist`, `category`, `description`, dan `audioFile`.
4. Kategori yang didukung: `Piano`, `Hujan`, `Alam`, `Air`, atau `Campuran`. `id` harus unik. `audioFile` harus menunjuk ke path yang benar, misalnya `./audio/hujan-di-teras.mp3`.
5. Simpan `app.js`, lalu refresh website. Track akan muncul otomatis di daftar. Gunakan tombol `＋ Campur` untuk memainkan beberapa track bersamaan. Setiap baris memiliki slider volume tersendiri; slider volume bawah adalah volume master.
6. Jalankan dari `http://localhost` atau hosting HTTPS, bukan `file://`, untuk hasil paling konsisten. Saat memperbarui website online, unggah folder `audio/` bersama file lainnya.

Contoh konfigurasi (objek harus berada di dalam array `customAudioTracks`):
```js
{
  id: 'custom-rain',
  title: 'Hujan di Teras',
  artist: 'Rekaman hujan',
  category: 'Hujan',
  icon: '☂',
  art: 'art-2',
  description: 'Rintik hujan untuk relaksasi.',
  audioFile: './audio/hujan-di-teras.mp3',
  kind: 'file'
}
```


## Latar suasana sinematik
Mode Sunrise, Siang, Sunset, dan Malam memakai latar foto alam yang berbeda serta animasi kamera perlahan (zoom/pan), lapisan cahaya, dan atmosfer CSS. Gambar diambil dari Unsplash melalui URL, jadi tampilan latar membutuhkan koneksi internet. Gerak ombak dan padi belum berupa rekaman video asli; gerakan yang diterapkan adalah efek kamera/atmosfer ringan.


## Mengganti background dengan gambar sendiri
1. Buka folder `images`.
2. Masukkan gambar sendiri dengan nama `sunrise.jpg`, `day.jpg`, `sunset.jpg`, dan `night.jpg`.
3. Buka `app.js` dan cari `customSceneImages`.
4. Jika memakai nama atau format lain, ubah path pada objek tersebut. Contoh:
   `sunrise: 'images/gunung-pagi.png'`
5. Simpan lalu refresh website. Background gambar akan menggantikan video saat file gambar berhasil dimuat. Jika gambar tidak ditemukan, video bawaan tetap digunakan.
