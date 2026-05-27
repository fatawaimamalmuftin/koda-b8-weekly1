import {
  lihatKeranjang,
  checkOut,
  wKeranjang,
} from "./lihatKeranjang.js";

import { Wuser, menuUtama, rl } from "./index.js";

/**
 * Menampilkan daftar menu ke terminal.
 *
 * @param {Array<{nama: string, harga: number}>} Tmenu
 * @param {string} kategori
 *
 * @returns {void}
 */

export function tampilDaftarMenu(Tmenu, kategori) {
  console.clear();

  console.log(`\n☕︎ Menu ${kategori} ✎﹏﹏\n`);

  for (let i = 0; i < Tmenu.length; i++) {
    console.log(`${i + 1}. ${Tmenu[i].nama} - Rp. ${Tmenu[i].harga}`);
  }

  console.log(`\n0. 🔙 Balik dulss..`);
}

/**
 * Validasi pilihan menu.
 *
 * @param {string} pilih
 * @param {Array} Tmenu
 *
 * @returns {boolean}
 */

export function validasiPilihanMenu(pilih, Tmenu) {
  return !isNaN(pilih) && pilih >= 1 && pilih <= Tmenu.length;
}

/**
 * Validasi quantity menu.
 *
 * @param {string} qty
 *
 * @returns {boolean}
 */
export function validasiQty(qty) {
  return !isNaN(qty) && qty > 0;
}

/**
 * Menambahkan item ke keranjang.
 *
 * @param {Array} Tmenu
 * @param {number} index
 * @param {string} qty
 *
 * @returns {void}
 */
export function tambahKeKeranjang(Tmenu, index, qty) {
  wKeranjang.push({
    nama: Tmenu[index].nama,
    harga: Tmenu[index].harga,
    qty: parseInt(qty),
  });
}

/**
 * Menampilkan daftar menu berdasarkan kategori yang dipilih Wuser
 * lalu menangani proses pemilihan menu, quantity, dan keranjang belanja.
 *
 * @param {Array<{nama: string, harga: number}>} Tmenu
 * @param {string} kategori
 *
 * @returns {void}
 */
export function tampilMenu(Tmenu, kategori) {
  tampilDaftarMenu(Tmenu, kategori);

  rl.question("\nAyow silahkan di pilih sesuai nomor : ", function (pilih) {
    if (pilih === "0") return menuUtama();

    if (!validasiPilihanMenu(pilih, Tmenu)) {
      console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
      return tampilMenu(Tmenu, kategori);
    }

    const index = parseInt(pilih) - 1;

    rl.question("👉 Mau berapa bosz?? ", function (qty) {
      if (!validasiQty(qty)) {
        console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
        return tampilMenu(Tmenu, kategori);
      }

      tambahKeKeranjang(Tmenu, index, qty);

      console.log(`\n${Tmenu[index].nama} udah masuk keranjang bosz! ⁀➴ 🛒`);

      console.log("\n(｡· v ·｡) ?\nMau lanjut apa bosz?\n");
      console.log("1. ➕ Tambah lagi");
      console.log("2. 🛒 Lihat Keranjang");
      console.log("3. 💳 Checkout sekarang");
      console.log("4. 🔙 Menu Utama");

      rl.question("\n👉 Lanjut ngapain bosz??... ", function (pilih) {
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
        }
      });
    });
  });
}