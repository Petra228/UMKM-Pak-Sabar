/**
 * =====================================================
 *   CONFIG UMKM — UBAH FILE INI SAJA PER UMKM
 * =====================================================
 *  Cara pakai:
 *  1. Ganti semua nilai di bawah sesuai data UMKM
 *  2. Simpan file ini
 *  3. Buka index.html — tampilan otomatis berubah
 * =====================================================
 */

const UMKM_CONFIG = {

  // ── IDENTITAS USAHA ───────────────────────────────
  nama_usaha: "Keripik Bu Sari",
  tagline: "Olahan Pisang Lezat & Autentik Khas Pilangrejo",
  deskripsi: "Camilan gurih, manis, dan renyah buatan tangan dengan bahan pisang pilihan lokal. Tanpa pengawet, kaya rasa, cocok untuk oleh-oleh dan cemilan sehari-hari.",
  emoji_usaha: "🍌",                // emoji ikon usaha di navbar
  tahun_berdiri: "2015",
  nama_pemilik: "Ibu Sari",

  // ── KONTAK & LOKASI ──────────────────────────────
  nomor_wa: "6281234567890",       // format: 62xxxxxxxxxx (tanpa +)
  alamat: "Jl. Pilangrejo No. 12, Desa Pilangrejo",
  jam_buka: "Senin – Sabtu, 08.00–17.00",

  // ── FOTO UTAMA (HERO) ─────────────────────────────
  // Ganti dengan path foto produk utama (bisa URL atau nama file lokal)
  foto_hero: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",

  // ── STATISTIK HERO ───────────────────────────────
  stats: [
    { angka: "10+", label: "Tahun Berdiri" },
    { angka: "5 Jenis", label: "Varian Produk" },
    { angka: "500+", label: "Pelanggan Puas" },
  ],

  // ── TENTANG KAMI ─────────────────────────────────
  cerita_usaha: `Keripik Bu Sari adalah usaha olahan pisang rumahan yang berdiri sejak 2015 di Desa Pilangrejo.
  Dirintis oleh Ibu Sari dengan resep turun-temurun, setiap produk dibuat dengan tangan menggunakan
  pisang segar pilihan langsung dari kebun lokal.`,

  keunggulan: [
    "Bahan baku pisang segar dari kebun lokal Desa Pilangrejo",
    "Proses produksi higienis, tanpa bahan pengawet berbahaya",
    "Kemasan rapi dan tahan lama, siap kirim ke berbagai kota",
    "Harga terjangkau dengan kualitas premium khas rumahan",
  ],

  foto_tentang: [
    {
      url: "https://images.unsplash.com/photo-1604542031658-5799ca5d7936?w=400&q=80",
      alt: "Proses Pembuatan", tall: true
    },
    {
      url: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=80",
      alt: "Bahan Baku Pisang", tall: false
    },
    {
      url: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&q=80",
      alt: "Kemasan Produk", tall: false
    },
  ],

  // ── PRODUK (tambah/kurangi sesuka hati) ──────────
  produk: [
    {
      nama: "Keripik Pisang Original",
      deskripsi: "Renyah gurih dengan taburan garam laut. Varian klasik favorit semua kalangan.",
      harga: "Rp 10.000",
      satuan: "200 gr",
      foto: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&q=80",
      badge: "🔥 Terlaris",
      badge_warna: "linear-gradient(135deg,#f59e0b,#d97706)",
    },
    {
      nama: "Keripik Pisang Pedas Manis",
      deskripsi: "Perpaduan rasa pedas manis yang bikin ketagihan. Cocok untuk pencinta makanan pedas.",
      harga: "Rp 17.000",
      satuan: "200 gr",
      foto: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
      badge: "🌶 Pedas",
      badge_warna: "linear-gradient(135deg,#ef4444,#dc2626)",
    },
    {
      nama: "Sale Pisang Legit",
      deskripsi: "Sale pisang tradisional yang legit dan kenyal. Dibuat dari pisang kepok pilihan.",
      harga: "Rp 20.000",
      satuan: "250 gr",
      foto: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=500&q=80",
      badge: "✨ Spesial",
      badge_warna: "linear-gradient(135deg,#8b5cf6,#7c3aed)",
    },
  ],

  // ── WARNA TEMA (opsional, bisa dibiarkan default) ─
  // Ubah jika UMKM punya warna brand sendiri
  warna: {
    primary: "#f59e0b",   // kuning-emas (default pisang)
    primary_dark: "#d97706",
    accent: "#78350f",   // coklat tua
  },

  // ── SEO ───────────────────────────────────────────
  meta_title: "Keripik Bu Sari — Olahan Pisang Asli Pilangrejo",
  meta_description: "Keripik dan olahan pisang berkualitas dari Desa Pilangrejo. Dibuat dengan cinta, rasa autentik, harga terjangkau.",
  nama_kota: "Pilangrejo",
  tahun_website: "2026",

};
