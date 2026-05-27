import {
  lihatKeranjang,
  checkOut,
  wKeranjang
} from "./lihatKeranjang.js";

import { Wuser, menuUtama, rl } from "./index.js";

/**
 * Menampilkan menu berdasarkan kategori (Kopi / Dessert)
 * dan mengarahkan user ke proses pemilihan item.
 *
 * @function tampilMenu
 * @param {Array<Object>} Tmenu - Daftar menu yang akan ditampilkan
 * @param {string} kategori - Nama kategori menu (contoh: KOPI / DISERT)
 * @returns {void}
 */
export function tampilMenu(Tmenu, kategori) {
  renderMenu(Tmenu, kategori);
  handleMenuInput(Tmenu, kategori);
}

/**
 * Render daftar menu ke terminal CLI.
 *
 * @function renderMenu
 * @param {Array<Object>} Tmenu - Data menu yang ditampilkan
 * @param {string} kategori - Label kategori menu
 * @returns {void}
 */
function renderMenu(Tmenu, kategori) {
  console.clear();

  console.log(`\n☕︎ Menu ${kategori} ✎﹏﹏\n`);

  for (let i = 0; i < Tmenu.length; i++) {
    console.log(`${i + 1}. ${Tmenu[i].nama} - Rp. ${Tmenu[i].harga}`);
  }

  console.log(`\n0. 🔙 Balik dulss..`);
}

/**
 * Menangani input pilihan menu dari user.
 *
 * @function handleMenuInput
 * @param {Array<Object>} Tmenu - Data menu aktif
 * @param {string} kategori - Kategori menu aktif
 * @returns {void}
 */
function handleMenuInput(Tmenu, kategori) {
  rl.question("\nAyow silahkan di pilih sesuai nomor : ", function (pilih) {
    if (pilih === "0") return menuUtama();

    if (isNaN(pilih) || pilih < 1 || pilih > Tmenu.length) {
      console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
      return tampilMenu(Tmenu, kategori);
    }

    const index = parseInt(pilih) - 1;

    handleQtyInput(Tmenu, kategori, index);
  });
}

/**
 * Menangani input jumlah (qty) dari item yang dipilih user.
 *
 * @function handleQtyInput
 * @param {Array<Object>} Tmenu - Data menu aktif
 * @param {string} kategori - Kategori menu aktif
 * @param {number} index - Index item yang dipilih user
 * @returns {void}
 */
function handleQtyInput(Tmenu, kategori, index) {
  rl.question("👉 Mau berapa bosz?? ", function (qty) {
    if (isNaN(qty) || qty <= 0) {
      console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
      return tampilMenu(Tmenu, kategori);
    }

    addToKeranjang(Tmenu, index, qty);

    showNextAction(Tmenu, kategori);
  });
}

/**
 * Menambahkan item ke dalam keranjang belanja.
 *
 * Side effect:
 * - Memodifikasi array global wKeranjang
 *
 * @function addToKeranjang
 * @param {Array<Object>} Tmenu - Data menu aktif
 * @param {number} index - Index item yang dipilih
 * @param {number|string} qty - Jumlah item yang dibeli
 * @returns {void}
 */
function addToKeranjang(Tmenu, index, qty) {
  wKeranjang.push({
    nama: Tmenu[index].nama,
    harga: Tmenu[index].harga,
    qty: parseInt(qty),
  });

  console.log(`\n${Tmenu[index].nama} udah masuk keranjang bosz! ⁀➴ 🛒`);
}

/**
 * Menampilkan opsi lanjutan setelah user menambahkan item.
 *
 * @function showNextAction
 * @param {Array<Object>} Tmenu - Data menu aktif
 * @param {string} kategori - Kategori menu aktif
 * @returns {void}
 */
function showNextAction(Tmenu, kategori) {
  console.log("\n(｡· v ·｡) ?\nMau lanjut apa bosz?\n");
  console.log("1. ➕ Tambah lagi");
  console.log("2. 🛒 Lihat Keranjang");
  console.log("3. 💳 Checkout sekarang");
  console.log("4. 🔙 Menu Utama");

  rl.question("\n👉 Lanjut ngapain bosz??... ", function (pilih) {
    handleNextAction(pilih, Tmenu, kategori);
  });
}

/**
 * Menangani aksi lanjutan setelah user memilih menu next step.
 *
 * @function handleNextAction
 * @param {string} pilih - Input pilihan user
 * @param {Array<Object>} Tmenu - Data menu aktif
 * @param {string} kategori - Kategori menu aktif
 * @returns {void}
 */
function handleNextAction(pilih, Tmenu, kategori) {
  switch (pilih) {
  case "1":
    tampilMenu(Tmenu, kategori);
    break;

  case "2":
    lihatKeranjang();
    break;

  case "3":
    checkOut();
    break;

  case "4":
    menuUtama();
    break;

  default:
    console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
    menuUtama();
    break;
  }
}