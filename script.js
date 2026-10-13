/* Kode tampilan. Biasanya tidak perlu diubah — edit data.js saja. */
(function () {
  const $ = (id) => document.getElementById(id);
  const rupiah = (n) => typeof n === "number" ? "Rp" + n.toLocaleString("id-ID") : String(n);

  // Foto dengan cadangan: kalau file tidak ada, tampil kotak berisi huruf pertama.
  function gambar(src, teks, kelas) {
    const cadangan = () => {
      const d = document.createElement("div");
      d.className = kelas + " ph";
      d.setAttribute("aria-hidden", "true");
      d.textContent = (teks || "?").trim().charAt(0).toUpperCase();
      return d;
    };
    if (!src) return cadangan();
    const img = document.createElement("img");
    img.className = kelas;
    img.src = src;
    img.alt = teks || "";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => img.replaceWith(cadangan()));
    return img;
  }

  function tampilkanProfil() {
    document.title = PROFIL.nama + " – Rekomendasi Belanja";
    $("foto").replaceWith(Object.assign(gambar(PROFIL.foto, PROFIL.nama, "avatar"), { id: "foto" }));
    $("nama").textContent = PROFIL.nama;
    $("deskripsi").textContent = PROFIL.deskripsi;
    (PROFIL.kontak || []).forEach((k) => {
      const a = document.createElement("a");
      a.href = k.url; a.textContent = k.label;
      a.target = "_blank"; a.rel = "noopener noreferrer";
      $("kontak").appendChild(a);
    });
    $("catatan").textContent = PROFIL.catatan || "";
  }

  function kartu(p) {
    const el = document.createElement("article");
    el.className = "kartu";

    const wrap = document.createElement("div");
    wrap.className = "foto-wrap";
    wrap.appendChild(gambar(p.foto, p.nama, "foto"));

    const info = document.createElement("div");
    info.className = "info";
    const nama = document.createElement("h2");
    nama.textContent = p.nama;
    const harga = document.createElement("p");
    harga.className = "harga";
    harga.textContent = rupiah(p.harga);
    const beli = document.createElement("a");
    beli.className = "beli";
    beli.href = p.link || "#";
    beli.target = "_blank";
    beli.rel = "noopener noreferrer sponsored";
    beli.textContent = p.tombol || "Beli Sekarang";

    info.append(nama, harga, beli);
    el.append(wrap, info);
    return el;
  }

  function tampilkanProduk(kategori) {
    const grid = $("grid");
    grid.replaceChildren();
    const daftar = PRODUK.filter((p) => kategori === "Semua" || p.kategori === kategori);
    daftar.forEach((p) => grid.appendChild(kartu(p)));
    $("kosong").hidden = daftar.length > 0;
  }

  function tampilkanKategori() {
    const semua = ["Semua", ...new Set(PRODUK.map((p) => p.kategori).filter(Boolean))];
    const wadah = $("kategori");
    semua.forEach((nama, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = nama;
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.addEventListener("click", () => {
        wadah.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", "false"));
        b.setAttribute("aria-pressed", "true");
        tampilkanProduk(nama);
      });
      wadah.appendChild(b);
    });
    if (semua.length < 3) wadah.hidden = true; // satu kategori saja: filter tidak perlu
  }

  tampilkanProfil();
  tampilkanKategori();
  tampilkanProduk("Semua");
})();
