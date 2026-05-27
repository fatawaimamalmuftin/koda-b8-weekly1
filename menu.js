import {
  lihatKeranjang,
  checkOut,
  wKeranjang
} from "./lihatKeranjang.js";

import { Wuser, menuUtama, rl } from "./index.js";

// =========================
// MAIN FUNCTION
// =========================
export function tampilMenu(Tmenu, kategori) {
  renderMenu(Tmenu, kategori);
  handleMenuInput(Tmenu, kategori);
}

// =========================
// RENDER MENU
// =========================
function renderMenu(Tmenu, kategori) {
  console.clear();

  console.log(`\n☕︎ Menu ${kategori} ✎﹏﹏\n`);

  for (let i = 0; i < Tmenu.length; i++) {
    console.log(`${i + 1}. ${Tmenu[i].nama} - Rp. ${Tmenu[i].harga}`);
  }

  console.log(`\n0. 🔙 Balik dulss..`);
}

// =========================
// HANDLE PILIH MENU
// =========================
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

// =========================
// HANDLE QTY INPUT
// =========================
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

// =========================
// ADD TO KERANJANG
// =========================
function addToKeranjang(Tmenu, index, qty) {
  wKeranjang.push({
    nama: Tmenu[index].nama,
    harga: Tmenu[index].harga,
    qty: parseInt(qty),
  });

  console.log(`\n${Tmenu[index].nama} udah masuk keranjang bosz! ⁀➴ 🛒`);
}

// =========================
// MENU LANJUTAN
// =========================
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

// =========================
// HANDLE ACTION
// =========================
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