/* =====================================================================
   FILE INI SATU-SATUNYA YANG PERLU KAMU EDIT.
   Ubah isi di antara tanda kutip "...", jangan hapus koma atau kurung.
   ===================================================================== */

/* 1) PROFIL ---------------------------------------------------------- */
const PROFIL = {
  nama: "Nama Kamu",
  deskripsi: "Saya pilihkan produk bagus dengan harga masuk akal. Cek rekomendasi favorit saya di bawah.",
  foto: "images/profil.jpg",          // taruh fotomu di folder images/
  kontak: [                           // boleh dihapus / ditambah
    { label: "WhatsApp",  url: "https://wa.me/6281234567890" },
    { label: "Instagram", url: "https://instagram.com/usernamekamu" },
    { label: "TikTok",    url: "https://tiktok.com/@usernamekamu" }
  ],
  catatan: "Beberapa tombol berisi tautan affiliate. Saya bisa menerima komisi dari pembelian tanpa biaya tambahan untuk kamu."
};

/* 2) PRODUK ----------------------------------------------------------
   Satu produk = satu blok { ... }. Salin-tempel blok untuk menambah.
   - nama     : nama produk
   - harga    : angka saja, tanpa titik (contoh 89000). Boleh juga teks, misal "Mulai Rp50.000"
   - foto     : alamat foto. Bisa file di folder images/ ("images/sepatu.jpg")
                atau link gambar dari internet. Kosongkan jika belum ada.
   - kategori : tulis bebas. Kategori baru otomatis muncul sebagai tombol filter.
   - link     : link Shopee Affiliate / marketplace lain
   - tombol   : (opsional) teks tombol, bawaannya "Beli Sekarang"
   ------------------------------------------------------------------- */
const PRODUK = [
  { nama: "Sneakers Putih Casual Unisex",   harga: 189000, foto: "images/produk-1.jpg", kategori: "Fashion",       link: "https://shopee.co.id/" },
  { nama: "Tas Selempang Anti Air",         harga: 129000, foto: "images/produk-2.jpg", kategori: "Fashion",       link: "https://shopee.co.id/" },
  { nama: "Earphone Bluetooth TWS",         harga: 99000,  foto: "images/produk-3.jpg", kategori: "Elektronik",    link: "https://shopee.co.id/" },
  { nama: "Powerbank 10.000 mAh Slim",      harga: 145000, foto: "images/produk-4.jpg", kategori: "Elektronik",    link: "https://shopee.co.id/" },
  { nama: "Casing HP Transparan Anti Retak", harga: 35000, foto: "images/produk-5.jpg", kategori: "Aksesori HP",   link: "https://shopee.co.id/" },
  { nama: "Holder HP Fleksibel",            harga: 42000,  foto: "images/produk-6.jpg", kategori: "Aksesori HP",   link: "https://shopee.co.id/" },
  { nama: "Botol Minum Stainless 750 ml",   harga: 79000,  foto: "images/produk-7.jpg", kategori: "Rumah Tangga",  link: "https://shopee.co.id/" },
  { nama: "Rak Organizer Serbaguna",        harga: 89000,  foto: "images/produk-8.jpg", kategori: "Rumah Tangga",  link: "https://shopee.co.id/", tombol: "Lihat di Shopee" }
];
